import { Livepeer } from "livepeer"
const apiKey = process.env.LIVEPEER_API_KEY;

const livepeer = new Livepeer({apiKey});

export default async function handler(req, res) {
  const playbackId = req.query.playbackId;
  console.log(playbackId);

  const response = await livepeer.playback.get(playbackId);


  const responseJson = JSON.parse(response.rawResponse.data.toString());
  res.status(200).json(responseJson);
}