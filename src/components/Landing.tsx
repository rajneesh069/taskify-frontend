import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import Signin from "./Signin";
import { emailSelector } from "../store/selectors/userSelector";
import { userState } from "../store/atoms/userAtom";

export default function Landing() {
  const email = useRecoilValue(emailSelector);
  const user = useRecoilValueLoadable(userState);
  if (user.state === "hasValue") {
    return JSON.stringify(user.contents);
  } else if (user.state === "hasError") {
    return "Error";
  } else if (user.state === "loading") {
    return "Loading";
  }
  if (email) {
    <div className="flex flex-col p-1 md:flex-row md:justify-around">
      <h1 className="text-4xl text-center md:text-5xl lg:text-6xl md:content-center">
        One Stop for Todos
      </h1>
    </div>;
  } else {
    return (
      <div className="flex flex-col p-1 md:flex-row md:justify-around">
        <h1 className="text-4xl text-center md:text-5xl lg:text-6xl md:content-center">
          One Stop for Todos
        </h1>
        <div className="md:w-[40%]">
          <Signin />
        </div>
      </div>
    );
  }
}
