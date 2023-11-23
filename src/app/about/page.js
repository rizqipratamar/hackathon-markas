import KarateristikSection from "@/components/Section/Karateristik";
import PartnerSection from "@/components/Section/Partner";
import KolaborasiSection from "@/components/Section/Kolaborasi";
import Caraosel from "@/components/Carousel";
import Image from "next/image";
import FILOSOFI_IMAGE1 from "@/images/png/filosofi-image-1.png";
import FILOSOFI_IMAGE2 from "@/images/png/filosofi-image-2.png";
import FILOSOFI_IMAGE3 from "@/images/png/filosofi-image-3.png";

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
      <div className="mt-20 grid grid-cols-2 w-full px-56 gap-y-10 justify-between">
        <Image
          src={FILOSOFI_IMAGE1}
          width={402}
          height={275}
          alt="Picture of the author"
        />

        <div>
          <div className="text-primary font-light text-xl mt-6">
            Gain Knowledge
          </div>
          <div className="text-[28px] font-semibold mt-2">Ruang Belajar</div>
          <div className="mt-4 font-light text-[20px]">
            MARKAS sangat mengedepankan kegunaan ruang untuk menunjang aktivitas
            penggunanya.
          </div>
        </div>

        <div>
          <div className="text-primary font-light text-xl mt-6">
            Get Mentored
          </div>
          <div className="text-[28px] font-semibold mt-2">
            Tempat Berkonsultasi
          </div>
          <div className="mt-4 font-light text-[20px]">
            Fasilitas pertemuan singkat maupun diskusi panjang untuk mengolah
            ide menjadi nyata.
          </div>
        </div>

        <Image
          src={FILOSOFI_IMAGE2}
          width={402}
          height={275}
          alt="Picture of the author"
        />

        <Image
          src={FILOSOFI_IMAGE3}
          width={402}
          height={275}
          alt="Picture of the author"
        />

        <div>
          <div className="text-primary font-light text-xl mt-6">
            Expand Network
          </div>
          <div className="text-[28px] font-semibold mt-2">
            Wadah Berkolaborasi
          </div>
          <div className="mt-4 font-light text-[20px]">
            Area kerja bersama yang dapat diakses para startup founder dan
            stakeholder startup.
          </div>
        </div>
      </div>
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
      <div className="hero min-h-[screen] mt-60 bg-white text-[36px] ">
        Gain Knowledge. Get Mentored. Expand Network.
      </div>
      <div className="hero min-h-[500px] bg-white" />
    </>
  );
};

export default About;
