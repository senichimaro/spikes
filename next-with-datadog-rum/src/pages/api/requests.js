// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') res.status(200).json([{ method: 'POST', body: `Inbound Requests targeting /api/requests by ${req.method} method`}])
  else res.status(200).json([{ method: req.method, body: `Inbound Requests targeting /api/requests by ${req.method} method`}])
}
