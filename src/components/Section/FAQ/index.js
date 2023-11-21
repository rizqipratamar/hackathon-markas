"use client";
import { useState } from "react";

const FAQSection = () => {
  const [checkedIndex, setCheckedIndex] = useState(0);
  return (
    <div className=" min-h-screen bg-white">
      <div>FAQ</div>
      <div>MAsih Ragu</div>
      <div>
        Kami menjawab apa yang menjadi pertanyaan Anda. Semoga membantu.
      </div>

      {[1, 2, 3, 4, 5].map((data, index) => {
        return (
          <div
            className="collapse collapse-plus bg-white border-b-2 rounded-none"
            key={index}
          >
            <input
              type="radio"
              name="my-accordion-3"
              checked={checkedIndex === index}
              onChange={() => setCheckedIndex(index)}
            />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        );
      })}

      <button className="btn btn-lg btn-primary mx-auto text-[28px] rounded-full ">
        Lebih Banyak
      </button>
    </div>
  );
};

export default FAQSection;
