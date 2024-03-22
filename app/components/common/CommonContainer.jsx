import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

export default function CommonContainer(props) {
  const { children} = props;
  return (
    <div className="bg-gradient-to-r from-sky-100 via-sky-50 to-sky-100 min-h-[100vh] w-full ">
      <TopNav />
      <div class="container m-auto bg-neutral-50 mt-2 rounded-sm min-h-[100vh] text-neutral-950 pl-4 pt-2">
        {children}
      </div>  
      <BottomNav />
    </div>
  )
} 