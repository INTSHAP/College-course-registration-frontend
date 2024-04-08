import cn from "../../libs/styles";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = ({ className, children, ...props }: FormProps) => {
  return (
    <form
      className={cn(
        "w-full md:w-1/4 flex flex-col gap-5 items-center justify-around md:border-[1px] rounded-md p-5 border-primary/20 bg-slate-100",
        className,
      )}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
