import { useEffect } from "react";
import axios from 'axios';
const STREAMER_SERVER = process.env.NEXT_PUBLIC_STREAMER_SERVER;

export default function FrameClient(props) {
  const { frame }= props;

  const dataContent = frame.content;


  const extractUrls = (dataContent) => {
    console.log(dataContent);

    const textContent = dataContent.data.castAddBody.text;
    console.log(textContent);
    // const urlRegex = /https?:\/\/[^\s]+/g;
    // const urls = text.match(urlRegex);
    // return urls || [];
  };

  useEffect(() => {
    const urls = extractUrls(dataContent);
    const url = urls[0];
    axios.post(`${STREAMER_SERVER}/frames/extract_meta`, { url }).then(function(dataResponse) {
      const data = dataResponse.data;
      console.log(data);
    });
  }, [frame]);
 
  return (
    <div className="w-[400px]">
      
    </div>
  );
}