import * as Player from "@livepeer/react/player";
import { getSrc } from "@livepeer/react/external";
import {
  LoadingIcon,
  MuteIcon,
  PauseIcon,
  PlayIcon,
  SettingsIcon,
  UnmuteIcon,
} from "@livepeer/react/assets";


const playbackId = "f5eese9wwl88k4g8";

export default function VideoPlayer (src) {
  console.log(src);
  const vod = [{
    "hrn": "HLS (TS)",
    "type": "html5/application/vnd.apple.mpegurl",
    "url": src
}];


  return (
    <Player.Root src={vod}>
      <Player.Container>
        <Player.Video title="Live stream" />

        <Player.Controls className="flex items-center justify-center">
          <Player.PlayPauseTrigger className="w-10 h-10">
            <Player.PlayingIndicator asChild matcher={false}>
              <PlayIcon />
            </Player.PlayingIndicator>
            <Player.PlayingIndicator asChild>
              <PauseIcon />
            </Player.PlayingIndicator>
          </Player.PlayPauseTrigger>
        </Player.Controls>
      </Player.Container>
    </Player.Root>
  );
};
