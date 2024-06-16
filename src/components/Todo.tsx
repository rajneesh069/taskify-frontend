export default function Todo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="dark:text-white text-black border border-black flex flex-col gap-3">
      <p>Title : {title}</p>
      <p>Description : {description}</p>
    </div>
  );
}
