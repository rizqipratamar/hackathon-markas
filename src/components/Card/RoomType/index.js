import Image from "next/image";
import ROOM_IMAGE from "@/images/png/room-image.png";
import Link from "next/link";

const mockTypeRoom = [
  { type: "HALL UKURAN BESAR", name: "TJOKRO HALL", capacity: 50 },
  { type: "RUANG WORKSHOP", name: "LINGGARJATI", capacity: 50 },
  { type: "RUANG WORKSHOP", name: "ROEM-ROYEN", capacity: 50 },
  { type: "RUANG WORKSHOP", name: "RENVILLE", capacity: 50 },
  { type: "RUANG MEETING", name: "SOEKARNO", capacity: 10 },
  { type: "RUANG MEETING", name: "KARTINI", capacity: 10 },
  { type: "RUANG MEETING", name: "SOEPARTMAN", capacity: 10 },
];

const RoomTypeCard = () => {
  return (
    <>
      {mockTypeRoom.map((data, index) => {
        return (
          <Link key={index} href={`/booking?name=${data.name}`}>
            <div className="w-full rounded-lg border-2 border-black p-[30px] hover:bg-slate-200 cursor-pointer mb-10">
              <div className="text-[22px] mb-[19px] font-semibold">
                {data.type}
              </div>

              <div className="grid grid-cols-2 gap-11 ">
                <Image src={ROOM_IMAGE} width={560} height={275} />
                <div>
                  <div className="font-semibold text-[31px] text-primary">
                    {data.name}
                  </div>
                  <div className="mt-5 text-[#5A5A5A] mb-4">
                    Area komunal untuk untuk kegiatan seminar, talkshow, dan
                    workshop.
                  </div>
                  <div className="mb-2">Fasilitas:</div>
                  <div className="grid grid-cols-3">
                    <div>• Tempat duduk</div>
                    <div>• Mikrofon</div>
                    <div>• Podium</div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div>• Perlengkapan Audio</div>
                    <div>• Proyektor</div>
                    <div>• Lightning</div>
                  </div>
                  <div className="text-primary mt-5">
                    Kapasitas Maksimal:
                    <span className="font-bold text-black ml-[14px]">
                      {data.capacity} Orang
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default RoomTypeCard;
