import { useEffect } from "react";
import axios from 'axios';

export default function FrameClient(props) {
  const { cast }= props;
  const dataContent = cast.content;


  const extractUrls = (text) => {
    const urlRegex = /https?:\/\/[^\s]+/g;
    const urls = text.match(urlRegex);
    return urls || [];
  };

  useEffect(() => {
    const urls = extractUrls(dataContent);
    console.log(urls);
    axios.post(`/api/parse_urls`, { urls }).then(function(dataResponse) {
      const data = dataResponse.data;
      console.log(data);
    });
  }, [cast]);
 
  return (
    <div className="w-[400px]">
      
    </div>
  );
}