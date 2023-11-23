import Image from "next/image";
import FILOSOFI_IMAGE1 from "@/images/png/filosofi-image-1.png";
import FILOSOFI_IMAGE2 from "@/images/png/filosofi-image-2.png";
import FILOSOFI_IMAGE3 from "@/images/png/filosofi-image-3.png";

const philosophy = [
  {
    banner: FILOSOFI_IMAGE1,
    topic: "Gain Knowledge",
    title: "Ruang Belajar",
    description:
      "MARKAS sangat mengedepankan kegunaan ruang untuk menunjang aktivitas penggunanya.",
  },
  {
    banner: FILOSOFI_IMAGE2,
    topic: "Get Mentored",
    title: "Tempat Berkonsultasi",
    description:
      "Fasilitas pertemuan singkat maupun diskusi panjang untuk mengolah ide menjadi nyata.",
  },
  {
    banner: FILOSOFI_IMAGE3,
    topic: "Expand Network",
    title: "Wadah Berkolaborasi",
    description:
      "Area kerja bersama yang dapat diakses para startup founder dan stakeholder startup.",
  },
];
const FilosofiCard = () => {
  return (
    <>
      {philosophy.map((data, index) => {
        return (
          <div key={index}>
            <Image
              src={data.banner}
              width={402}
              height={275}
              alt="Picture of the author"
            />
            <div className="text-primary font-light text-xl mt-6">
              {data.topic}
            </div>
            <div className="text-[28px] font-semibold mt-2">{data.title}</div>
            <div className="mt-4 font-light text-[20px]">
              {data.description}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FilosofiCard;
