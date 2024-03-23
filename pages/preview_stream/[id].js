import '@/app/globals.css';
import PlayerHome from '@/app/components/player/Home';
import Head from 'next/head';

export default function StreamsId() {
  return (
    <div>
      <Head>



        <meta name="fc:frame" content="vNext" />
        <meta property="fc:frame:video"
          content="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8" />


        <meta property="fc:frame:video:type" content="application/x-mpegURL" />
        <meta property="fc:frame:image" content="https://www.w3schools.com/w3images/mountains.jpg" />
        <meta property="og:image" content="https://www.w3schools.com/w3images/mountains.jpg" />


      </Head>

      StreamsId
      <div>
        <PlayerHome />
      </div>
    </div>
  )
}