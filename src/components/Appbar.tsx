import { useRecoilValue } from "recoil";
import { emailSelector } from "../store/selectors/userSelector";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { TimerIcon } from "./icons/TimerIcon";

export default function Appbar() {
  const navigate = useNavigate();
  const email = useRecoilValue(emailSelector);
  return (
    <>
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex sticky top-0 right-0 items-center justify-between">
        <Link to="#" className="flex items-center gap-2">
          <TimerIcon className="h-8 w-8" />
          <span className="text-xl font-bold">Taskify</span>
        </Link>
        <div className="flex flex-row gap-2">
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => {
              // todo add the add todos route, if not signed in, navigate to signin
              email ? navigate("addTodos") : navigate("/signin");
            }}
          >
            Login
          </Button>
        </div>
      </header>
    </>
  );
}


