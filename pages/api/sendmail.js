import Cors from 'cors';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { OAuth2 } = google.auth;
const {
  CLIENT_ID,
  CLIENT_SECRET,
  MAIL_USER,
  REDIRECT_URL,
  REFRESH_TOKEN,
} = process.env;

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  if (req.method === 'POST') {
    // if name, email, or message is empty/blank
    // respond with "empty body" message
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.json({ data: null, message: 'Empty body' });

    // make OAuth Client to get access token
    const oauth2Client = new OAuth2(
      CLIENT_ID, // ClientID
      CLIENT_SECRET, // Client Secret
      REDIRECT_URL, // Redirect URL
    );

    // set OAuth Client credentials with Refresh Token
    // grabbed my Refresh token from OAuth Playground
    oauth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN,
    });

    // get access token to use with Nodemailer's transporter
    const accessToken = oauth2Client.getAccessToken();

    // create the authenticated transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        type: 'OAuth2',
        user: MAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken,
      },
    });
    // send mail with defined transport object
    transporter.sendMail(
      {
        from: `"${name || `Name`}" <${email || 'email@example.com'}>`,
        to: 'gusrvalenzuela@gmail.com', // list of receivers
        subject: 'Email from gusvalenzuela.com',
        // text: message || "Hello world?", // plain text body
        html: `<p>${message || 'Empty message'}</p>`, // html body
      },
      (err, resp) => {
        if (err) {
          res.json(err);
        } else {
          res.json({ data: resp, message: 'success' });
        }

        transporter.close();
      },
    );
  }

  return res.end();
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export default handler;
