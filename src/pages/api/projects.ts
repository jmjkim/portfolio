// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type ProjectData = {
  title: string;
  description: string;
  mainImage: string;
  detailImages: string[]; 
  stacks: string[];
  demonstration: string;
}

export const projectDataInfo: ProjectData[] = [
  {
    title: "kartrade",
    description: "become an international seller of exclusive k-pop proudcts",
    mainImage: "/public/projects/kartrade/kartrade_logo.png",
    detailImages: [
      "/public/projects/kartrade/kartrade_1.png",
      "/public/projects/kartrade/kartrade_2.png",
      "/public/projects/kartrade/kartrade_3.png",
    ],
    stacks: [
      "html", "css", "chakra ui", "typescript", "nextjs", "firebase (to be implemented)",
    ],
    demonstration: "",
  },

  {
    title: "lamborghinian",
    description: "become a member of the lamborghinian",
    mainImage: "/public/projects/lamborghinian/lamborghinian_main.png",
    detailImages: [
      "/public/projects/lamborghinian/lamborghinian_1.png",
      "/public/projects/lamborghinian/lamborghinian_2.png",
      "/public/projects/lamborghinian/lamborghinian_3.png",
    ],
    stacks: [
      "html", "css", "react", "rails"
    ],
    demonstration: "https://www.youtube.com/watch?v=hCBBGYJejYQ",
  },

  {
    title: "eventeller",
    description: "become a host of unique events",
    mainImage: "/public/projects/eventeller/eventeller_main.png",
    detailImages: [
      "/public/projects/eventeller/eventeller_1.png",
      "/public/projects/eventeller/eventeller_2.png",
      "/public/projects/eventeller/eventeller_3.png",
    ],
    stacks: [
      "html", "css", "react", "rails"
    ],
    demonstration: "https://www.youtube.com/watch?v=F22JO5Oouto",
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData[]>
) {
  res.status(200).json(projectDataInfo)
}
