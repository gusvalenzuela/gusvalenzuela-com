import LocalProjects from "../../utils/seed";
export default (req, res) => {
  res.statusCode = 200;
  res.json(LocalProjects.projectsSeed);
};
