import Image from "next/image";
import ROOM_IMAGE from "@/images/png/room-image.png";

const RoomTypeCard = () => {
  return (
    <div className="w-full rounded-lg border-2 border-black p-[30px]">
      <div className="text-[22px] mb-[19px]">Ruang Meeting</div>
      <div className="grid grid-cols-2 gap-11 ">
        <Image src={ROOM_IMAGE} width={560} height={275} />
        <div>
          <div className="font-semibold text-[31px]">Soekarno</div>
          <div className="mt-5">
            Area komunal untuk untuk kegiatan seminar, talkshow, dan workshop.
          </div>
          <div className="mb-2">Fasilitas:</div>
          <div className="grid grid-cols-3">
            <div>• Tempat duduk</div>
            <div>• Mikrofon</div>
            <div>• Podium</div>
          </div>
          <div className="grid grid-cols-3">
            <div>• Tempat duduk</div>
            <div>• Mikrofon</div>
            <div>• Podium</div>
          </div>
          <div className="text-primary mt-5">
            Kapasitas Maksimal:
            <span className="font-bold text-black ml-[14px]">10 Orang</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypeCard;
