import { useRouter } from 'next/router';

export default function TopNav() {
  const router = useRouter();

  const navigateToPage = (page) => {
    router.replace(`/${page}`); // Use the path of the new page you want to navigate to
  };


  return (
    <div className="h-[56px] bg-sky-900 text-neutral-50 static top-0">
      <div className="grid grid-cols-3">  
      <div className="logo-block pl-4 flex">

        <img src={"/lg55.png"} className="w-[40px] w-h-[40px] inline-flex mt-1"/>
        <div className="inline-flex ml-2 text-[22px] font-bold mt-2 pl-2 ">GMCasts</div>
      </div>  
      <div>

      </div>
      <div>
        <div className="text-[18px] font-bold mt-2 pl-2 cursor-pointer " onClick={() => navigateToPage("create")}>
          Create
        </div>
      </div>
      <div>

      </div>
    </div>
    </div>
  )
}