import Image from "next/image";
import dayjs from "dayjs";

const EventCard = (props) => {
  return (
    <div>
      <div className="w-full aspect-[399/312] relative cursor-pointer">
        <Image
          src={props.data.imagePath}
          fill={true}
          priority={true}
          className="object-cover"
          alt="Picture of the author"
        />
      </div>
      <div className="text-lg text-center flex-1 p-4 bg-white border-[4px] border-t-0 border-black">
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
