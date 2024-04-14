import cn from "../../../libs/styles";

interface InfoProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  value: string | number;
}
export default function Info({ title, value, className }: InfoProps) {
  return (
    <div className="grid grid-cols-2 border-b-2">
      <h3 className={cn("font-semibold p-5 bg-slate-100", className)}>
        {title}
      </h3>
      <h3 className="p-5 border-l-2">{value}</h3>
    </div>
  );
}
