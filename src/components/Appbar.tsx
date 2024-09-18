import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TimerIcon, Menu } from "lucide-react";
import { useRecoilValueLoadable } from "recoil";
import { userStateAtom } from "@/store/atoms/user";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Appbar() {
  const navigate = useNavigate();
  const userIdLoadable = useRecoilValueLoadable(userStateAtom);
  const NavItems = () => (
    <>
      <Button
        variant="ghost"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
      <Button
        onClick={() => {
          userIdLoadable.state === "hasValue" && userIdLoadable.contents != null
            ? navigate("addTodos")
            : navigate("/signin");
        }}
      >
        {userIdLoadable.state === "hasValue" && userIdLoadable.contents != null
          ? "Add Todo"
          : "Login"}
      </Button>
    </>
  );

  return (
    <header
      className={`${
        userIdLoadable.state === "loading" ? `hidden` : `flex`
      } sticky top-0 z-10 w-full border-b bg-background`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <TimerIcon className="h-6 w-6 sm:h-8 sm:w-8" />
          <span className="text-lg font-bold sm:text-xl">Taskify</span>
        </Link>
        <nav className="hidden sm:flex sm:items-center sm:gap-4">
          <NavItems />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="sm:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
