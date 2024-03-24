import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

export default function FrameDataClient(props) {
  const { metadata, id } = props;
  console.log(metadata);
  console.log(id);
  
  const [ meta, setMeta] = useState({});
  let currentDisplay = <span />;
  if (metadata.video) {
    currentDisplay = (
      <VideoPlayer src={metadata.video} />
    )
  }

  return (
    <div>
        {currentDisplay}
    </div>
  )
}