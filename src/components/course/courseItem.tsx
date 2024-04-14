import cn from "../../libs/styles";
import { CourseProps } from "../../types/course/index.types";

export default function CourseItem({
  code,
  title,
  creditUnit,
  fee,
  status,
  className,
  children,
}: CourseProps) {
  return (
    <article
      className={cn(
        "flex justify-between items-center bg-white shadow-sm p-2 md:p-5 w-full",
        className,
      )}
    >
      <h3>{code}</h3>
      <h3 className="hidden md:visible">{title}</h3>
      <h3>{creditUnit}</h3>
      <h3>{status}</h3>
      <h3>{fee}</h3>
      {children}
    </article>
  );
}
