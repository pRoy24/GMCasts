

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

  const framURL = `${FRAME_BASE_URL}/${payload.playbackId}`

  const dataOptions = {
    fid: FID,
    network: FarcasterNetwork.MAINNET,
  };


  const castAddReq = await makeCastAdd(
    {
      text: "This is a song about somebody else https://google.com",
      embeds: [],
      embedsDeprecated: [],
      mentions: [],
      mentionsPositions: [],
    },
    dataOptions,
    ed25519Signer,
  );


  const cast = castAddReq._unsafeUnwrap();


  const messageResponse = await hubClient.submitMessage(cast);


  return (messageResponse);


}
