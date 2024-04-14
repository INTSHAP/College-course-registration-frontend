import cn from "../../libs/styles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import React, { ReactElement, ReactNode, useState } from "react";

interface JumbotronProps extends React.HTMLAttributes<ReactElement> {
  text: ReactNode;
}

export default function Jumbotron({
  children,
  className,
  text,
}: JumbotronProps) {
  const [open_, setOpen_] = useState(false);

  const close = () => {
    setOpen_(false);
  };

  const open = () => {
    setOpen_(true);
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className={cn(
          "p-2 md:p-5 md:px-10 bg-slate-200 relative w-full",
          className,
        )}
      >
        {/* <h1 className="text-left">{text}</h1> */}
        {text}
        {open_ ? (
          <FaChevronUp
            onClick={close}
            className="absolute right-2 top-2 md:top-5 md:right-5"
          />
        ) : (
          <FaChevronDown
            onClick={open}
            className="absolute right-2 top-2 md:top-5 md:right-5"
          />
        )}
      </div>
      {open_ && children}
    </div>
  );
}
