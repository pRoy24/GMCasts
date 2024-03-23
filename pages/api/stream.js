import { Livepeer } from "livepeer";
import axios from 'axios';

const apiKey = process.env.LIVEPEER_API_KEY;
const STREAMER_SERVER = process.env.STREAMER_SERVER;

export default async function handler(req, res) {

    const livepeer = new Livepeer({apiKey});
  
    const dataRes = await livepeer.stream.create({
      name: 'My First Live Stream'
    });
    const responseBuffer = dataRes.rawResponse.data;
    const responseBufferString = responseBuffer.toString();
    const responseJSON = JSON.parse(responseBufferString);
    const streamKey = responseJSON.streamKey;
    axios.get(`${STREAMER_SERVER}/start_stream?streamKey=${streamKey}`)  
    res.status(200).json(responseJSON);


  
}