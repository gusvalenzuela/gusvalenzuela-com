import axios from 'axios';

export default {
  // Gets all projects
  getProjects() {
    return axios.get('/api/projects');
  },
  // Gets the Project with the given id
  getProject(id) {
    return axios.get(`/api/projects/${id}`);
  },
  getGitUpdateData() {
    return axios.get(`https://api.github.com/users/gusvalenzuela/repos`);
  },
  async sendContactEmail(data = {}) {
    const postResponse = await fetch('/api/sendmail', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((r) => r.json());

    return postResponse;
  },
};
