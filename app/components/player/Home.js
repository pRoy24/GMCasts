import {
  ClipIcon,
  EnterFullscreenIcon,
  ExitFullscreenIcon,
  LoadingIcon,
  MuteIcon,
  PauseIcon,
  PictureInPictureIcon,
  PlayIcon,
  SettingsIcon,
  UnmuteIcon,
} from "@livepeer/react/assets";

import { getSrc } from "@livepeer/react/external";
import * as Player from "@livepeer/react/player";
import axios from "axios";
// import { vodSource } from "./source";
import { useEffect, useState } from "react";



const playbackId = "ef96f8vvfta18y5k";


export default function PlayerHome() {
  const [ vodSource, setVodSource ] = useState(null);
  useEffect(() => {
    axios.get(`/api/stream_src?playbackId=${playbackId}`).then((res) => {
      console.log(res.data);
      setVodSource(res.data);
    });
  }, []);

  let videoPlayerMedia = <span />;
  if (vodSource) {
    videoPlayerMedia = (
      <Player.Root src={getSrc(vodSource)}>
        <Player.Container className="h-[720px] w-[720px] overflow-hidden bg-gray-950">
          <Player.Video title="Live stream" className="h-full w-full" />

          <Player.Controls className="flex items-center justify-center">
          <Player.PlayPauseTrigger className="w-6 h-6 hover:scale-110 transition flex-shrink-0">
                <Player.PlayingIndicator asChild matcher={false}>
                  <PlayIcon className="w-full h-full" />
                </Player.PlayingIndicator>
                <Player.PlayingIndicator asChild>
                  <PauseIcon className="w-full h-full" />
                </Player.PlayingIndicator>
              </Player.PlayPauseTrigger>

              <Player.LiveIndicator className="gap-2 flex items-center">
                <div className="bg-red-600 h-1.5 w-1.5 rounded-full" />
                <span className="text-sm select-none">LIVE</span>
              </Player.LiveIndicator>
              <Player.LiveIndicator
                matcher={false}
                className="flex gap-2 items-center"
              >
                <Player.Time className="text-sm tabular-nums select-none" />
              </Player.LiveIndicator>

              <Player.MuteTrigger className="w-6 h-6 hover:scale-110 transition flex-shrink-0">
                <Player.VolumeIndicator asChild matcher={false}>
                  <MuteIcon className="w-full h-full" />
                </Player.VolumeIndicator>
                <Player.VolumeIndicator asChild matcher={true}>
                  <UnmuteIcon className="w-full h-full" />
                </Player.VolumeIndicator>
              </Player.MuteTrigger>
              <Player.Volume className="relative mr-1 flex-1 group flex cursor-pointer items-center select-none touch-none max-w-[120px] h-5">
                <Player.Track className="bg-white/30 relative grow rounded-full transition h-[2px] md:h-[3px] group-hover:h-[3px] group-hover:md:h-[4px]">
                  <Player.Range className="absolute bg-white rounded-full h-full" />
                </Player.Track>
                <Player.Thumb className="block transition group-hover:scale-110 w-3 h-3 bg-white rounded-full" />
              </Player.Volume>
          </Player.Controls>
        </Player.Container>
      </Player.Root>
    );
  }

  return (
    <div>
      {videoPlayerMedia}
    </div>
  );
};