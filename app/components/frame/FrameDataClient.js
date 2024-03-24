import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

export default function FrameDataClient(props) {
  const { metadata, id } = props;

  const [ meta, setMeta] = useState({});
  let currentDisplay = <span />;
  if (metadata.video) {
    const vodSource = [
      {
        src: metadata.video,
        type: metadata.videoType,
      }
    ]



    
    const metaSrc = {
      "type": "live",
      "meta": {
          "live": 1,
          "source": [
            {
                "hrn": "HLS (TS)",
                "type": "html5/application/vnd.apple.mpegurl",
                "url": "https://livepeercdn.studio/hls/ae5b8iv3nuptn7yf/index.m3u8"
            },
            {
                "hrn": "WebRTC (H264)",
                "type": "html5/video/h264",
                "url": "https://livepeercdn.studio/webrtc/ae5b8iv3nuptn7yf"
            }
        ]
      }
  }

    currentDisplay = (
      <VideoPlayer vodSrc={metaSrc} />
    )
  }

  return (
    <div>
        {currentDisplay}
    </div>
  )
}