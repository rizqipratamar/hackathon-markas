import FilosofiCard from "@/components/Card/Filosofi";
import KarateristikSection from "@/components/Section/Karateristik";
import PartnerSection from "@/components/Section/Partner";
import KolaborasiSection from "@/components/Section/Kolaborasi";
import Caraosel from "@/components/Carousel";

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

      <div className="text-center mt-[70px]">
        <div className="text-primary text-[28px]">Filosofi</div>
        <div className="font-bold text-5xl mt-5">INLKUSIF dan KOLABORATIF</div>
        <div className="text-[20px] font-light mt-[35px]">
          Sejak diinisiasi di tahun 2016, semangat #1000StartupDigital adalah
          untuk berkolaborasi <br /> membuat ekosistem startup Indonesia menjadi
          inklusif dan kolaboratif.
        </div>
      </div>

      <div></div>
      {/* <div
        className="hero bg-white my-20 max-w-7xl
      "
      >
        <Caraosel
          slides={[
            <div className="h-60 flex flex-row gap-x-10">
              <div className="custom-card">
                <div className="custom-card-header font-bold">
                  👩‍💼👨‍💼
                  <br />
                  Praktisi Industri
                </div>
                <div className="custom-card-body">
                  Dihadirkan pula praktisi-praktisi profesional yang siap
                  membantu dalam menggali pengalaman yang relevan dengan
                  kebutuhan luas.
                </div>
              </div>
              <div className="custom-card">
                <div className="custom-card-header font-bold">
                  👩‍💼👨‍💼
                  <br />
                  Praktisi Industri
                </div>
                <div className="custom-card-body">
                  Dihadirkan pula praktisi-praktisi profesional yang siap
                  membantu dalam menggali pengalaman yang relevan dengan
                  kebutuhan luas.
                </div>
              </div>
              <div className="custom-card">
                <div className="custom-card-header font-bold">
                  👩‍💼👨‍💼
                  <br />
                  Praktisi Industri
                </div>
                <div className="custom-card-body">
                  Dihadirkan pula praktisi-praktisi profesional yang siap
                  membantu dalam menggali pengalaman yang relevan dengan
                  kebutuhan luas.
                </div>
              </div>
              <div className="custom-card">
                <div className="custom-card-header font-bold">
                  👩‍💼👨‍💼
                  <br />
                  Praktisi Industri
                </div>
                <div className="custom-card-body">
                  Dihadirkan pula praktisi-praktisi profesional yang siap
                  membantu dalam menggali pengalaman yang relevan dengan
                  kebutuhan luas.
                </div>
              </div>
            </div>,
            <div className="h-60 flex flex-row gap-x-10">
              <div className="custom-card">
                <div className="custom-card-header font-bold">
                  👩‍💼👨‍💼
                  <br />
                  Praktisi Industri
                </div>
                <div className="custom-card-body">
                  Dihadirkan pula praktisi-praktisi profesional yang siap
                  membantu dalam menggali pengalaman yang relevan dengan
                  kebutuhan luas.
                </div>
              </div>
              <div className="custom-card">
                <div className="custom-card-header font-bold">
                  👩‍💼👨‍💼
                  <br />
                  Praktisi Industri
                </div>
                <div className="custom-card-body">
                  Dihadirkan pula praktisi-praktisi profesional yang siap
                  membantu dalam menggali pengalaman yang relevan dengan
                  kebutuhan luas.
                </div>
              </div>
              <div className="custom-card">
                <div className="custom-card-header font-bold">
                  👩‍💼👨‍💼
                  <br />
                  Praktisi Industri
                </div>
                <div className="custom-card-body">
                  Dihadirkan pula praktisi-praktisi profesional yang siap
                  membantu dalam menggali pengalaman yang relevan dengan
                  kebutuhan luas.
                </div>
              </div>
              <div className="custom-card">
                <div className="custom-card-header font-bold">
                  👩‍💼👨‍💼
                  <br />
                  Praktisi Industri
                </div>
                <div className="custom-card-body">
                  Dihadirkan pula praktisi-praktisi profesional yang siap
                  membantu dalam menggali pengalaman yang relevan dengan
                  kebutuhan luas.
                </div>
              </div>
            </div>,
          ]}
        />
      </div> */}
      <div className="hero min-h-screen bg-white my-20">
        <KarateristikSection />
      </div>
      <div className="hero min-h-screen bg-white my-20">
        <KolaborasiSection />
      </div>
      <PartnerSection />
      <div className="hero min-h-[screen] bg-white text-[36px] ">
        Gain Knowledge. Get Mentored. Expand Network.
      </div>
      <div className="hero min-h-[400px] bg-white" />
    </>
  );
};

export default About;
