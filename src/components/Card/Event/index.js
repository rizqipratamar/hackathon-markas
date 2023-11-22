import Image from "next/image";
import EVENT_CARD_IMAGE from "@/images/png/event-card-image.png";
import dayjs from "dayjs";

const EventCard = (props) => {
  return (
    <div className="w-[400px]">
      <Image
        src={props.data.imagePath}
        width={400}
        height={312}
        alt="Picture of the author"
      />
      <div className="text-[22px] text-center flex-1 p-4 bg-white border-[4px] border-t-0 border-black">
        <div>{props.data.name}</div>
      </div>
      <div className="text-center flex justify-between p-4 bg-primary text-white border-[4px] border-t-0 border-black">
        <div>{props.data.city}</div>
        <div>{dayjs(props.data.date).format("MMMM YYYY")}</div>
      </div>
    </div>
  );
};

export default EventCard;
