import Image from "next/image";
import FILOSOFI_IMAGE from "@/images/png/filosofi-image-1.png";

const FilosofiCard = () => {
  return (
    <div>
      <Image
        src={FILOSOFI_IMAGE}
        width={402}
        height={275}
        alt="Picture of the author"
      />
      <div className="text-primary font-thin text-[20px] mt-6">Gain Knowledge</div>
      <div className="text-[28px] mt-2">Ruang Belajar</div>
      <div className="mt-4 font-thin text-[20px">
        MARKAS sangat mengedepankan kegunaan ruang untuk menunjang aktivitas
        penggunanya.
      </div>
    </div>
  );
};

export default FilosofiCard;
