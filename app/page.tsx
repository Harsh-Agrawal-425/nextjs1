import axios from "axios";
import { use } from "react";

async function getUserData() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );

  return response.data;
}

export default async function Home(){
  const userDetails = await getUserData();

  return(
    <div>
      Hello <br></br>
      {userDetails.name}
      {userDetails.email}
    </div>
  );
}