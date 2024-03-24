const axios = require('axios');
const { STREAMER_SERVER } = process.env;
import Head from 'next/head';
import '@/app/globals.css';

import CommonContainer from '@/app/components/common/CommonContainer';
const default_image = 'https://imaginewares.s3.us-west-2.amazonaws.com/static/txt2img/generations/generation_15_190f32.png';


export default function InitFramePage(props) {
  const { metadata , id} = props;

  let metaImage = default_image;
  if (metadata.image) {
    metaImage = metadata.image;
  }
  let metaButtons = null;
  let frameState = null;
  let postURL = null;
  if (metadata.buttons) {
    metaButtons = metadata.buttons.map((button, idx) => {
      return (
        <>
      <meta name={`fc:frame:button:${(idx + 1)}`} content={button.text} />
      <meta name={`fc:frame:post_url`} content={button.post_url} />
      </>
    )
    });
  }
  if (metadata.state) {
    frameState = <meta name="fc:frame:state" content={metadata.state} />
  }
  if (metadata.post) {
    postURL = <meta name="fc:frame:post" content={metadata.post} />
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
        <meta property="fc:frame:image" content={metaImage} />
   
        {metaButtons}
        {frameState}
        {postURL}
      </Head>
      <div>
        <CommonContainer>

        </CommonContainer>
       </div> 
    </div>
  )
}

export async function getStaticPaths() {
  // const data = await axios.get(`${STREAMER_SERVER}/frames/list`);
  
  const paths = [
  ]
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  console.log(params);
  console.log("EE TEE");
  const { id } = params;
  const { data } = await axios.get(`${STREAMER_SERVER}/frames/init_metadata?id=${id}`);
  return {
    props: {
      metadata: data,

    },
  }
}
