import { CourseProps } from "../../types/course/index.types";

export default function CourseItem({
  code,
  title,
  creditUnit,
  fee,
  status,
}: CourseProps) {
  return (
    <article className="flex justify-between items-center bg-white shadow-sm p-2 md:p-5 w-full">
      <h3>{code}</h3>
      <h3 className="hidden md:visible">{title}</h3>
      <h3>{creditUnit}</h3>
      <h3>{status}</h3>
      <h3>{fee}</h3>
    </article>
  );
}
