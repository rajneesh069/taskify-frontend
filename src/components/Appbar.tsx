import { useRecoilValue } from "recoil";
import { emailSelector } from "../store/selectors/userSelector";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function Appbar() {
  const navigate = useNavigate();
  const email = useRecoilValue(emailSelector);
  return (
    <>
      <nav className="flex flex-row justify-between sticky top-0">
        <div className="flex flex-col justify-center content-center items-center">
          <h1 className="text-4xl font-semibold font-cursive">Taskify</h1>
          <p className=""></p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={"outline"}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <div>
            {email ? (
              <Button variant={"outline"}>Logout</Button>
            ) : (
              <Button variant={"outline"}>Signin</Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
