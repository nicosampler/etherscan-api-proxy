import axios from "axios";
import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(
  _request: Request,
  { params }: { params: { blockNumber: string } }
) {
  const response = await axios.get(
    `https://api.gnosisscan.io/api?module=block&action=getblockreward&blockno=${params.blockNumber}&apikey=YourApiKeyToken`
  );

  return NextResponse.json(response.data, { status: 200 });
}
