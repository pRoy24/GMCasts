import Head from 'next/head'
import InitFrame from '@/app/components/FramePage/InitFrame'
import axios from 'axios'
const STREAMER_SERVER = process.env.STREAMER_SERVER;
export default function FramePageInit() {
  return (
    <div>
      <Head>

      </Head>
      <body>
        <InitFrame />
      </body>
    </div>
  )
}


export async function getStaticPaths() {
  const { data } = await axios.get(`${STREAMER_SERVER}/frames/list`);
  console.log(data);

  return {
    props: {
      data
    },
  }
}

export async function getStaticProps({params}) {
  return {
    props: {
      // Will be passed to the page component as props
    },
  }
}