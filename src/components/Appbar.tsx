import { useRecoilValue } from "recoil";
import DarkModeToggle from "./DarkModeToggle";
import { emailSelector } from "../store/selectors/userSelector";
import { useNavigate } from "react-router-dom";

export default function Appbar() {
  const navigate = useNavigate();
  const email = useRecoilValue(emailSelector);
  return (
    <>
      <div className="flex flex-row justify-between sticky border border-black">
        <div className="mt-1 order-1">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button className="ml-3">Button</button>
        </div>
        <p>{email}</p>
        <div className="order-2">
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
}
