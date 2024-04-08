import Featured from "../components/ui/featured/featured";
import Hero from "../components/ui/hero/hero";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Hero />
      <Featured />
    </div>
  );
};

export default HomePage;
