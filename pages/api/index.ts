import { NextApiRequest, NextApiResponse } from "next";

export default function apiIndex(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    message: "hi"
  });
};
