import FrameClient from "./FrameClient";

export default function FrameContainer(props) {
  return (
    <div className="bg-sky-500 h-[400px]">
      <FrameClient {...props} />
    </div>
  )
}