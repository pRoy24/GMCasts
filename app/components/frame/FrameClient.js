import { useEffect, useState } from "react";
import axios from 'axios';
const STREAMER_SERVER = process.env.NEXT_PUBLIC_STREAMER_SERVER;

export default function FrameClient(props) {
  const { frame } = props;

  const [ meta, setMeta] = useState({});



  const extractUrls = (dataContent) => {

    const textContent = dataContent.castAddBody.text;
     const urlRegex = /https?:\/\/[^\s]+/g;
     const urls = textContent.match(urlRegex);
     return urls || [];
  };

  useEffect(() => {
    console.log(frame);
    const dataContent = frame.data;
    if (dataContent) {
      const urls = extractUrls(dataContent);
      const url = urls[0];
      axios.post(`${STREAMER_SERVER}/frames/extract_meta`, { url }).then(function (dataResponse) {
        const data = dataResponse.data;
        console.log(data);
        
        setMeta(data);
      });
    }
  }, [frame]);

  let currentViewDisplay;
  if (meta) {
    if (meta['fc:frame:video']) {
      const videoSrc = meta['fc:frame:video'];
      currentViewDisplay = <VideoPlayer src={videoSrc} />
    } else if (meta['fc:frame:image']) {
      const imageSrc = meta['fc:frame:image'];
      currentViewDisplay = <img src={imageSrc} />
    } else if (meta['og:image']) {
      const imageSrc = meta['og:image'];
      currentViewDisplay = <img src={imageSrc} />
    } else {
      currentViewDisplay = <div>No content</div>
    }
  }

  return (
    <div className="w-[400px]">
       {currentViewDisplay}
    </div>
  );
}