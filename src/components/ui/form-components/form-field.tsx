import cn from "../../../libs/styles";
import React from "react";
import { FormFieldProps, FormSelectFieldProps, SelectProps } from "./types";

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
          className,
        )}
      />

      {error && <small className="text-red-500 text-sm">{error.message}</small>}
    </div>
  );
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, ...props }, ref) => {
    return (
      <select
        className={cn(
          "p-2 px-4 outline-none border-primary/20 text-black focus:border-primary/70 block w-full border-[1px] rounded-md placeholder:text-slate-300 placeholder:text-sm invalid:text-red-400",
          className,
        )}
        {...props}
        ref={ref}
      >
        {options.map(({ label, value }, index) => (
          <option value={value} key={index}>
            {label}
          </option>
        ))}
      </select>
    );
  },
);

export const FormSelectInputField: React.FC<FormSelectFieldProps> = ({
  name,
  options,
  register,
  valueAsNumber,
  error,
  label,
  multiple,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full ">
      {label && <label htmlFor={name}>{label}</label>}
      <Select
        multiple={multiple}
        defaultValue={defaultValue}
        options={options}
        {...register(name, { valueAsNumber })}
      />

      {error && <small className="text-red-500 text-sm">{error.message}</small>}
    </div>
  );
};
