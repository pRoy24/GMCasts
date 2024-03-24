import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

export default function FrameDataClient(props) {
  const { metadata, id } = props;

  const [meta, setMeta] = useState({});
  let currentDisplay = <span />;

  const vodSource = [];
  if (metadata.videoHLS) {
    vodSource.push({
      "hrn": "HLS (TS)",
      "type": metadata.videoHLSType,
      "url": metadata.videoHLS
    });
  }
  if (metadata.videoWebRTC) {
    vodSource.push({
      "hrn": "WebRTC (H264)",
      "type": metadata.videoWebRTCType,
      "url": metadata.videoWebRTC
    });
  }

  const metaSrc = {
    "type": "live",
    "meta": {
      "live": 1,
      "source": vodSource
    }
  }

  currentDisplay = (
    <VideoPlayer vodSrc={metaSrc} />
  )


  return (
    <div>
      {currentDisplay}
    </div>
  )
}