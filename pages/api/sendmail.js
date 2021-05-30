import Cors from 'cors';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { OAuth2 } = google.auth;

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

  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.json({ data: null, message: 'Empty body' });

  // Rest of the API logic
  if (req.method === 'POST') {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID || 'Your ClientID Here', // ClientID
      process.env.CLIENT_SECRET || 'Your Client Secret Here', // Client Secret
      'https://developers.google.com/oauthplayground', // Redirect URL
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
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
