import { useEffect } from "react";
import CommonContainer from "../common/CommonContainer";
import axios from "axios";

export default function Home()  {
  useEffect(() => {
    axios.get(`/api/hello`).then(function(dataRes) {
      console.log(dataRes.data);

    })
  }, []);
  return (
    <CommonContainer>
        <div>
          Frames list
        </div>
    </CommonContainer>
  )
}
