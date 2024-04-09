import featuredBook from "../../../images/book.png";
import { Button } from "../button";

const Featured: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-evenly w-full bg-slate-200 p-5 md:p-10 md:py-20">
      <img src={featuredBook} alt="book" width={300} height={300} />
      <div className="flex flex-col gap-5">
        <p>Browse through all courses ahead of time</p>
        <Button text="View all courses" variant={"dark"} />
      </div>
    </div>
  );
};

export default Featured;
