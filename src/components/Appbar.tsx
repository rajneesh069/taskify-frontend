import { useRecoilValue } from "recoil";
import DarkModeToggle from "./DarkModeToggle";
import { emailSelector } from "../store/selectors/userSelector";
import { useNavigate } from "react-router-dom";

export default function Appbar() {
  const navigate = useNavigate();
  const email = useRecoilValue(emailSelector);
  return (
    <>
      <div className="flex flex-row gap-3 justify-end sticky mb-2 p-1">
        <div>
          <button
            className=""
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
        <div className="">
          <DarkModeToggle />
        </div>

        <p>{email}</p>
      </div>
    </>
  );
}
