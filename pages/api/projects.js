import LocalProjects from '../../utils/seed';

export async function handler(req, res) {
  res.statusCode = 200;
  res.json(LocalProjects.projectsSeed);
}
