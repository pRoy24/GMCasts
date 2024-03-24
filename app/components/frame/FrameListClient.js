import { useEffect , useState} from "react"
import axios from 'axios';
import FrameClient from "./FrameClient";
const STREAMING_SERVER = process.env.NEXT_PUBLIC_STREAMER_SERVER;

export default function FrameListClient() {

  const [ frameList, setFrameList ] = useState([]);

  useEffect(() => {
    axios.get(`${STREAMING_SERVER}/frames/active_frames`).then((response) => {
      console.log(response.data);
      setFrameList(response.data);
    });;

  }, []);

  let frameListDisplay;
  if (frameList.length > 0) {
    frameListDisplay = frameList.map((frame) => {
      return (
        <FrameClient key={frame.short_hash} frame={frame} />
      )
    })
  }
  return (
    <div>
      {frameListDisplay}
    </div>
  )
}