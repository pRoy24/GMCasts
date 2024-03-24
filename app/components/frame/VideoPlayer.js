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

const playbackId = "f5eese9wwl88k4g8";

export default function VideoPlayer (props) {
  const { vodSrc } = props;
  console.log(vodSrc);


  return (
    <div className="bg-neutral-50">

  
    <Player.Root src={getSrc(vodSrc)}>
    <Player.Container className="h-[512px] w-[512px] overflow-hidden bg-sky-950 m-auto">
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
  </div>
  );
};
