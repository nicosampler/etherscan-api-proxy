import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      `https://api.gnosisscan.io/api?module=block&action=getblockreward&blockno=${req.query.blockNumber}&apikey=YourApiKeyToken`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default handler;
