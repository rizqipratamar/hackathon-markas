import CircleArrowIcon from "@/images/svg/circleArrow";

const ReviewSection = () => {
  return (
    <div className="w-screen bg-primary p-[108px] text-white">
      <div className="flex justify-between">
        <div>
          <div className="font-bold text-[48px]">Apa Kata Mereka</div>
          <div className="text-[28px] mt-5 ">⭐ 4.6 | 30 Ulasan di Google</div>
        </div>
        <div className="flex my-auto gap-5">
          <CircleArrowIcon side="left" color="white" />
          <CircleArrowIcon side="right" color="white" />
        </div>
      </div>

      <div className="grid grid-cols-2 mt-[92px] gap-[112px]">
        <div>
          <div className="flex gap-9">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="my-auto">
              <div>Lexi Handi Nayana</div>
              <div>BuddyP2P - Hamburg, Jerman</div>
            </div>
          </div>
          <div className="mt-10">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <div className="mt-4">
            Kami memulai perjalanan kami di MARKAS dan tidak pernah
            menyesalinya. Tempat yang penuh dengan sumber daya dan inspirasi.
          </div>
        </div>
        <div>
          <div className="flex gap-9">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="my-auto">
              <div>Lexi Handi Nayana</div>
              <div>BuddyP2P - Hamburg, Jerman</div>
            </div>
          </div>
          <div className="mt-10">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <div className="mt-4">
            Kami memulai perjalanan kami di MARKAS dan tidak pernah
            menyesalinya. Tempat yang penuh dengan sumber daya dan inspirasi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
