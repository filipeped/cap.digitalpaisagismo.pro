import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const payload = {
      ...req.body,
      client_ip_address: req.headers["x-forwarded-for"] || undefined
    };

    const response = await fetch(
      "https://graph.facebook.com/v19.0/2233441287097609/events?access_token=EAAQfmxkTTZCcBO3i1VW6ahcFogZA0ZBLl9ynyHUKwQU9GhcfCo0ZCNMAoiwP00rYccsUkgeusgRtP8vZAkSZBMXT5NR56y1i2emoZCA1TZCPDaxsdyw7XEvZBeDVEAdo2aVhn6873INfQ6rVXMqUV9Fl51ZCWGgyZBJeoxNUZB9J0YV0UA65G1EPGiA6EKM3MBzBygZDZD",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Erro no Proxy CAPI:", err);
    res.status(500).json({ error: "Erro interno no servidor CAPI." });
  }
}
