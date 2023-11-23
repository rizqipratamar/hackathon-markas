import { useState } from "react";
import CircleArrowIcon from "@/images/svg/circleArrow";
import Image from "next/image";

const bgImage = {
  backgroundImage: "url('/bg-review.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "white",
  backgroundSize: "cover",
};

const ReviewSection = ({ review, reviewPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * reviewPerPage;
  const indexOfFirstItem = indexOfLastItem - reviewPerPage;
  const currentItems = review.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(review.length / reviewPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="w-screen h-[925px] p-[108px] text-white" style={bgImage}>
      <div className="flex justify-between">
        <div>
          <div className="font-extrabold text-5xl mt-[181px]">
            APA KATA MEREKA
          </div>
          <div className="font-semibold text-[28px] mt-5 ">
            ⭐ 4.6 | 30 Ulasan di Google
          </div>
        </div>
        <div className="flex my-auto gap-5 mt-[181px]">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="cursor-pointer"
          >
            <CircleArrowIcon
              side="left"
              color={currentPage === 1 ? "gray" : "white"}
            />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="cursor-pointer"
          >
            <CircleArrowIcon
              side="right"
              color={currentPage === totalPages ? "gray" : "white"}
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-[78px] gap-[112px]">
        {currentItems.map((data, index) => {
          return (
            <div key={index}>
              <div className="flex gap-9">
                <div className="avatar">
                  <div className="rounded-full">
                    <Image
                      src={data.avatar}
                      width={112}
                      height={112}
                      alt="Picture of the reviewer"
                    />
                  </div>
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
