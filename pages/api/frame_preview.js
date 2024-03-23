
export default async function handler(req, res) {

  console.log(req.body);
  const FRAME_BASE_URL = process.env.FRAME_BASE_URL;
  res.setHeader('Location', `${FRAME_BASE_URL}/frame_page/preview/${req.body.playbackId}`);
  res.statusCode = 302;
  res.end();


}

