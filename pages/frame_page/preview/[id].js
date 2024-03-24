const axios = require('axios');
const { STREAMER_SERVER } = process.env;

export default function PreviewFramePage() {
  return (
    <div>
      <h1>Preview  Page</h1>
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
  const { id } = params;
  const { data } = await axios.get(`${STREAMER_SERVER}/frames/init_metadata?id=${id}`);
  return {
    props: {
      metadata: data,
    },
  }
}
