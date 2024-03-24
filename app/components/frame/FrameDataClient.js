import React, { useState } from 'react';

export default function FrameDataClient(props) {
  const { metadata, id } = props;
  console.log(metadata);
  console.log(id);
  
  const [ meta, setMeta] = useState({});


  return (
    <div>

    </div>
  )
}