import axios from "axios";
export default {
  // Gets all projects
  getProjects: function () {
    return axios.get("/api/projects");
  },
  // Gets the Project with the given id
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  getGitUpdateData: function () {
    return axios.get(`https://api.github.com/users/gusvalenzuela/repos`);
  },
  sendContactEmail: function (data) {
    return axios.post(`/api/sendmail`, data);
  },
};
