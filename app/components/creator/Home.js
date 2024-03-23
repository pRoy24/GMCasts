import CommonContainer from "../common/CommonContainer";
import CommonButton from "../common/CommonButton";
import { useState,} from 'react';

import axios from 'axios';
import PlayerHome from "../player/Home";

export default function CreatorHome() {
  const [ streamData, setStreamData ] = useState(null);

  const createNewVideoFrame = (evt) => {
    console.log('createNewVideoFrame')
    evt.preventDefault();
    
    axios.post('/api/stream', {
      title: 'test',
    }).then(function(dataRes) {
      console.log(dataRes.data);
      setStreamData(dataRes.data);
       
    });

  }

  const castNewScreeningFrame = async (evt) => {
    evt.preventDefault();
    
    console.log('castNewScreeningFrame')


    await publishFrame()

 //   await castPublishedFrame();


  }

  const publishFrame = async () => {
    console.log("PUBLISHING FRAME");

    axios.post(`/api/create_cast`).then(function(dataRes) {
      console.log(dataRes);

    });
  }


  let responseDataDisplay = <span />;

  if (streamData) {
    responseDataDisplay = <div>
      <div>Stream ID: {streamData.streamKey}</div>
      <div>Playback ID: {streamData.playbackId}</div>

      <div>
        <PlayerHome playbackId={streamData.playbackId} />
      </div>
      <div>
        <CommonButton onClick={castNewScreeningFrame}>
          Publish
        </CommonButton>
      </div>
    </div>
  
  }

  return (
    <CommonContainer>
      <div>
        Creator Home
        <div>
        <form>
          <div className="form-group">
            <div className="form-label">Stream Title</div>
            <input type="text" />
          </div>
          <div className="form-group">
            <div className="form-label">Gated token address</div>
            <input type="text" />
          </div>
          <CommonButton onClick={createNewVideoFrame}>Submit</CommonButton>
        </form>
        <div>
          {responseDataDisplay}
        </div>
        </div>
      </div>
    </CommonContainer>
  )
}