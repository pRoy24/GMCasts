import axios from 'axios';
const STREAMER_SERVER = process.env.STREAMER_SERVER;

const {
  makeCastAdd,
  makeCastRemove,
  makeLinkAdd,
  makeLinkRemove,
  makeReactionAdd,
  makeReactionRemove,
  getSSLHubRpcClient,
  makeUserDataAdd,
  NobleEd25519Signer,
  FarcasterNetwork,
} = require('@farcaster/hub-nodejs');

const { hexToBytes } = require("@noble/hashes/utils");


const ACCOUNT_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY;

const FID = 402685; // Your fid
const FRAME_BASE_URL = process.env.FRAME_BASE_URL;

const hubRpcEndpoint = 'hub-grpc.pinata.cloud';
const hubClient = getSSLHubRpcClient(hubRpcEndpoint);

const privateKeyBytes = hexToBytes(ACCOUNT_PRIVATE_KEY.slice(2));
const ed25519Signer = new NobleEd25519Signer(privateKeyBytes);

export default async function handler(req, res) {

  const payload = req.body;

  await axios.post(`${STREAMER_SERVER}/hub/cast`, payload);

  

  res.status(200).json({ message: 'Hello from the server!' })
  

}
