import Signin from "./Signin";

export default function Landing() {
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
