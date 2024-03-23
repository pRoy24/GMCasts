
export default function InitFramePage() {
  return (
    <div>
      <h1>Frame Page</h1>
    </div>
  )
}

export async function getStaticPaths() {

}

export async function getStaticProps({params}) {
  const { data } = await axios.get(`${STREAMER_SERVER}/frames/list`);
  console.log(data);

  return {
    props: {
      data
    },
  }
}
