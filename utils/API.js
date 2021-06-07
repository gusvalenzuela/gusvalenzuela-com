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
  async sendContactEmail(email = {}) {
    const response = await axios.post('/api/sendmail', email);
    return response;
  },
};
