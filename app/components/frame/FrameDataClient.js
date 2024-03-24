import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

export default function FrameDataClient(props) {
  const { metadata, id } = props;
  console.log(metadata);
  console.log(id);
  
  const [ meta, setMeta] = useState({});
  let currentDisplay = <span />;
  if (metadata.video) {
    const vodSource = [
      {
        src: metadata.video,
        type: metadata.videoType,
      }
    ]
    currentDisplay = (
      <VideoPlayer vodSource={vodSource} />
    )
  }

  return (
    <div>
        {currentDisplay}
    </div>
  )
}