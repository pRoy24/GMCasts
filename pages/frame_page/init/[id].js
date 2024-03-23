const axios = require('axios');
const { STREAMER_SERVER } = process.env;

export default function InitFramePage() {
  return (
    <div>
      <h1>Frame Page</h1>
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = await axios.get(`${STREAMER_SERVER}/frames/list`);

  return {
    props: {
      data
    },
  }
}

export async function getStaticProps({params}) {

}
