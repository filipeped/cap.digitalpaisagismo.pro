import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const accessToken = "EAAQfmxkTTZCcBO3i1VW6ahcFogZA0ZBLl9ynyHUKwQU9GhcfCo0ZCNMAoiwP00rYccsUkgeusgRtP8vZAkSZBMXT5NR56y1i2emoZCA1TZCPDaxsdyw7XEvZBeDVEAdo2aVhn6873INfQ6rVXMqUV9Fl51ZCWGgyZBJeoxNUZB9J0YV0UA65G1EPGiA6EKM3MBzBygZDZD";
  const pixelId = "2233441287097609";

  const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  return NextResponse.json(result);
}
