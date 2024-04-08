import { cva, VariantProps } from "class-variance-authority";
import cn from "../../libs/styles";

const buttonVariants = cva(
  "px-4 py-2 outline-none rounded-md inline-flex items-center justify-center shadow-md",
  {
    variants: {
      variant: {
        default: "text-secondary bg-primary hover:bg-primary/70",
        secondary: "text-secondary bg-primary/50 hover:bg-primary/30",
        white:
          "text-grey-1 border border-grey bg-white hover:border-primary hover:text-primary",
      },
      size: {
        default: "py-3 h-9",
        xm: "py-1 h-6",
        sm: "py-2  h-7",
        md: "py-3  h-8",
        lg: "py-4  h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}>
      {text}
    </button>
  );
};
