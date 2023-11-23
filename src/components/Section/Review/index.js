import CircleArrowIcon from "@/images/svg/circleArrow";
import Image from "next/image";
import REVIEW_AVATAR_1 from "@/images/png/review-avatar-1.png";
import REVIEW_AVATAR_2 from "@/images/png/review-avatar-2.png";
const bgImage = {
  backgroundImage: 'url("../../../images/png/bg-img.png")',
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  color: "white",
};
const ReviewSection = () => {
  return (
    <div className="w-screen p-[108px] bg-primary text-white" style={bgImage}>
      <div className="flex justify-between">
        <div>
          <div className="font-extrabold text-5xl">APA KATA MEREKA</div>
          <div className="font-semibold text-[28px] mt-5 ">
            ⭐ 4.6 | 30 Ulasan di Google
          </div>
        </div>
        <div className="flex my-auto gap-5">
          <CircleArrowIcon side="left" color="white" />
          <CircleArrowIcon side="right" color="white" />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-[78px] gap-[112px]">
        {[
          {
            name: "Lexi Handi Nayana",
            avatar: REVIEW_AVATAR_1,
            job: "BuddyP2P - Hamburg, Jerman",
            rating: "⭐ ⭐ ⭐ ⭐ ⭐",
            review:
              "Kami memulai perjalanan kami di MARKAS dan tidak pernah menyesalinya. Tempat yang penuh dengan sumber daya dan inspirasi.",
          },
          {
            name: "David Nasrulloh",
            avatar: REVIEW_AVATAR_2,
            job: "Elux Space - Malang, Jawa Timur",
            rating: "⭐ ⭐ ⭐ ⭐ ⭐",
            review:
              "Ruang pertemuan MARKAS membantu kami untuk menggelar pertemuan dengan investor dengan mudah.",
          },
        ].map((data, index) => {
          return (
            <div key={index}>
              <div className="flex gap-9">
                <div className="avatar">
                  <Image
                    src={data.avatar}
                    width={112}
                    height={112}
                    alt="Picture of the reviewer"
                  />
                </div>
                <div className="my-auto">
                  <div className="text-4xl font-bold my-5">{data.name}</div>
                  <div className="text-xl font-light mb-2">{data.job}</div>
                </div>
              </div>
              <div className="mt-10">{data.rating}</div>
              <div className="text-2xl font-normal mt-4">{data.review}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
