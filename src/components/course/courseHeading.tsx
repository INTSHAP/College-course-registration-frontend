import cn from "../../libs/styles";
import { CourseHeaderProps } from "../../types/course/index.types";

export default function CourseHeading({
  className,
  children,
}: CourseHeaderProps) {
  return (
    <header
      className={cn(
        "flex justify-between items-center bg-slate-200 shadow-sm p-2 md:p-5 w-full capitalize font-bold",
        className,
      )}
    >
      <h3>Code</h3>
      <h3 className="hidden md:visible">title</h3>
      <h3>creditUnit</h3>
      <h3>status</h3>
      <h3>fee</h3>
      {children}
    </header>
  );
}
