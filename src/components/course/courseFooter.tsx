import cn from "../../libs/styles";
import { CourseFooterProps } from "../../types/course/index.types";

export default function CourseFooter({
  totalCreditUnit,
  totalFee,
  className,
}: CourseFooterProps) {
  return (
    <footer
      className={cn(
        "flex justify-end gap-2 md:gap-5 items-center bg-primary text-white shadow-sm p-2 md:p-5 w-full capitalize",
        className,
      )}
    >
      <h3 className="">
        Total credit Unit{" "}
        <span className="font-semibold ">{totalCreditUnit}</span>
      </h3>
      <h3>
        Total fee <span className="font-semibold">{totalFee}</span>
      </h3>
    </footer>
  );
}
