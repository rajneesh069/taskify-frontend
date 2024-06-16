import DarkModeToggle from "./DarkModeToggle";

export default function Appbar() {
  return (
    <div className="flex flex-row gap-3 sticky mb-2">
      <button>Hello</button>
      <DarkModeToggle />
    </div>
  );
}
