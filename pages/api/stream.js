import { Livepeer } from "livepeer";

const apiKey = process.env.LIVEPEER_API_KEY;


export default async function handler(req, res) {

    const livepeer = new Livepeer({apiKey});
  
    const dataRes = await livepeer.stream.create({
      name: 'My First Live Stream'
    });
    const responseBuffer = dataRes.rawResponse.data;
    const responseBufferString = responseBuffer.toString();
    const responseJSON = JSON.parse(responseBufferString);
    res.status(200).json(responseJSON);


   

}