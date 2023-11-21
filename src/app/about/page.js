import FilosofiCard from "@/components/Card/Filosofi";
import KarateristikSection from "@/components/Section/Karateristik";

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content text-center">
          <div className="">
            <p className="py-6 text-white text-[36px] font-light ">
              Ini cerita tentang <span className="text-primary">MARKAS</span>{" "}
              kita...
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold text-primary text-[96px]">
              Markas
            </h1>
            <p className="py-6 text-black text-[36px] font-light ">
              A hub for startup founders to grow with the ecosystem.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-white my-20">
        <KarateristikSection />
      </div>
      <div className="hero min-h-screen bg-white" />
    </>
  );
};

export default About;
