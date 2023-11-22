import Image from "next/image";
import EVENT_CARD_IMAGE from "@/images/png/event-card-image.png";

const EventCard = (
  data = {
    title: "The (TRUE) Scrum Framework",
    desc: "Pelajari kunci sukses",
    city: "Surabaya",
    month: "September 202",
    type: "meeting",
    time: "",
  }
) => {
  return (
    <div className="w-[400px]">
      <Image
        src={EVENT_CARD_IMAGE}
        width={400}
        height={312}
        alt="Picture of the author"
      />
      <div className="text-[22px] text-center flex-1 p-4 bg-white border-[4px] border-t-0 border-black">
        <div>SEKOLAH BETA HUSTLER</div>
        <div>EPS. 39 - SCRUM FRAMEWORK</div>
      </div>
      <div className="text-center flex justify-between p-4 bg-primary text-white border-[4px] border-t-0 border-black">
        <div>SURABAYA</div>
        <div>SEPTEMBER 2023</div>
      </div>
    </div>
  );
};

export default EventCard;
