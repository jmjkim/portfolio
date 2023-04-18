// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type ProjectData = {
  title: string;
  description: string;
  mainImage: string;
  detailImages: string[] | undefined; 
  stacks: string[];
}

export const projectDataInfo: ProjectData[] = [
  {
    title: "lamborghinian",
    description: "123",
    mainImage: "123",
    detailImages: [],
    stacks: [],
  },

  {
    title: "eventeller",
    description: "456",
    mainImage: "456",
    detailImages: [],
    stacks: [],
  },

  {
    title: "kartrade",
    description: "789",
    mainImage: "789",
    detailImages: [],
    stacks: [],
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData[]>
) {
  res.status(200).json(projectDataInfo)
}
