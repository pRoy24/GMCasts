const axios = require('axios');
const { STREAMER_SERVER } = process.env;
import Head from 'next/head';
const default_image = 'https://imaginewares.s3.us-west-2.amazonaws.com/static/txt2img/generations/generation_15_190f32.png';


export default function InitFramePage(props) {
  const { metadata } = props;
  console.log(metadata);
  let metaImage = default_image;
  if (metadata.image) {
    metaImage = metadata.image;
  }
  let metaButtons = null;
  if (metadata.buttons) {
    metaButtons = metadata.buttons.map((button, idx) => {
      return <meta name={`fc:frame:button:${idx}`} content={button.text} />
    });
  }
  return (
    <div>
      <Head>
        <title>Frame Page</title>
        <meta name="fc:frame" content="vNext" />
        <meta name="of:accepts:xmtp" content='vNext' />
        <meta name="of:accepts:farcaster" content="vNext" />
        <meta name="of:version" content="vNext" />

        <meta name="of:image" content={metaImage} />
        <meta name="og:image" content={metaImage} />
        <meta
          property="of:accepts:xmtp"
          content="2024-02-01"
        />
        <meta
          property="of:accepts:lens"
          content="1.1"
        />
        <meta property="fc:frame:image" content={metaImage} />
   
        {metaButtons}
      </Head>
      <h1>Frame Page</h1>
    </div>
  )
}

export async function getStaticPaths() {
  const data = await axios.get(`${STREAMER_SERVER}/frames/list`);
  console.log(data);
  const paths = [
  ]
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { data } = await axios.get(`${STREAMER_SERVER}/frames/init_metadata?id=${id}`);
  return {
    props: {
      metadata: data,
    },
  }
}
