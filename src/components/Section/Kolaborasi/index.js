const KolaborasiSection = () => {
  const KOLABORASI = [
    {
      emot: "👩‍💼👨‍💼",
      title: "Praktisi Industri",
      desc: "Dihadirkan pula praktisi-praktisi profesional yang siap membantu dalam menggali pengalaman yang relevan denga kebutuhan luas.",
    },
    {
      emot: "👩‍🎓👨‍🎓",
      title: "Pakar Pendidikan",
      desc: "Akademisi pendidikan dari berbagai universitas dan bidang akan berkolaborasi bersama dalam penelitian agar tercapainya validasi yang diperlukan.",
    },
    {
      emot: "👩‍⚖️👨‍⚖️",
      title: "Pemerintahan",
      desc: "Dukungan dalam legalitas dan yuridis sangatlah diperlukan, oleh karenanya ahli-ahli dalam hukum dihadirkan dalam suatu forum diskusi terbuka.",
    },
    {
      emot: "🕵️‍♀️🕵️‍♂️",
      title: "Media Masa",
      desc: "Dukungan media masa maupun cetak berguna bagi perkembangan startup, oleh karenanya MARKAS bekerja bersama media yang terpercaya.",
    },
    {
      emot: "👩‍💼👨‍💼",
      title: "Praktisi Industri",
      desc: "Dihadirkan pula praktisi-praktisi profesional yang siap membantu dalam menggali pengalaman yang relevan denga kebutuhan luas.",
    },
  ];
  return (
    <div className="text-center">
      <div className="text-primary text-[28px]">KOLABORASI</div>
      <div className="text-[48px] mt-5 font-bold">
        PUSAT KOLABORASI EKOSISTEM DIGITAL
      </div>
      <div className="text-[20px] mt-[35px] mb-20">
        Dalam Markas, kami visualisasikan semangat tersebut dalam area kerja
        bersama yang dapat <br />
        diakses para startup founder dan stakeholder startup.
      </div>
      <div className="mt-[180px] grid grid-cols-1 gap-3">
        <div className="flex gap-5 mx-auto">
          {KOLABORASI.map((data, index) => {
            return (
              <div
                className={`py-10 px-6 shadow-lg rounded-2xl ${
                  index % 2 === 0 ? "mt-[-60px]" : "mb-[-60px]"
                }`}
                key={index}
              >
                <div className="custom-card-header font-bold text-[22px]">
                  {data.emot}
                  <br />
                  {data.title}
                </div>
                <div className="mt-[18px]">{data.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KolaborasiSection;
