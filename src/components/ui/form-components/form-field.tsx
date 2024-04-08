import cn from "../../../libs/styles";
import { FormFieldProps } from "./types";

export const FormInputField: React.FC<FormFieldProps> = ({
  name,
  type,
  placeholder,
  register,
  valueAsNumber,
  error,
  className,
  label,
}) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full ">
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        className={cn(
          "p-2 px-4 outline-none border-primary/20 text-black focus:border-primary/70 block w-full border-[1px] rounded-md placeholder:text-slate-300 placeholder:text-sm invalid:text-red-400",
          className
        )}
      />

      {error && <small className="text-red-500 text-sm">{error.message}</small>}
    </div>
  );
};
