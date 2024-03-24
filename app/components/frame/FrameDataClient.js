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
                  "type": metadata.videoType,
                  "url": metadata.video
              },

          ]
      }
  }

    currentDisplay = (
      <VideoPlayer src={metaSrc} />
    )
  }

  return (
    <div>
        {currentDisplay}
    </div>
  )
}