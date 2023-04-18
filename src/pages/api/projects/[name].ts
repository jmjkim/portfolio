import type { NextApiRequest, NextApiResponse } from 'next';
import { ProjectData, projectDataInfo } from '../projects';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProjectData | undefined>
  ) {
    const { title } = req.query;
    const project = projectDataInfo.find(project => title === project.title)

    res.status(200).json(project)
  }