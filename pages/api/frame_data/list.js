
const axios = require('axios');
const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_API_URL = process.env.PINATA_HUB_URL;
const USER_FID = process.env.USER_FID;

export default async function handler(req, res) {
  const pinataHeaders = {
    'Authorization': `Bearer ${PINATA_API_KEY}`,
  }
  const castListData = await axios.get(`${PINATA_API_URL}/api/cast/list`, {'headers': pinataHeaders});

  const castList = castListData.data.messages;

  const castListContentMap = castList.map((cast) => {
    return {
      embeds: cast.castAddBody.embeds[0]
    }

  });

  res.status(200).json({ message: 'Hello from the server!' })
}


