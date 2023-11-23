"use client";
import { useState } from "react";
const faq = [
  {
    question: "Apakah Ada Acara atau Aktivitas Sosial di MARKAS?",
    answer:
      "Ya, MARKAS banyak menyelenggarakan acara, seminar, dan kegiatan sosial yang memungkinkan setiap anggota untuk berinteraksi, belajar, dan membangun jaringan.",
  },
  {
    question: "Bagaimana Saya Bisa Bergabung dengan MARKAS?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Apakah Ada Jam Operasional Tertentu?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Bagaimana dengan Privasi di MARKAS?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Bagaimana Saya Menyewa untuk Co-Working Space Sementara?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const FAQSection = () => {
  const [checkedIndex, setCheckedIndex] = useState(0);
  const [faqList, setFaqList] = useState(faq);
  return (
    <div className="min-h-screen bg-white mt-[182px]">
      <div className="text-[28px] text-center font-semibold text-primary mb-[19px]">
        FAQ
      </div>
      <div className="text-5xl text-center font-extrabold mb-9">
        *MASIH RAGU?
      </div>
      <div className="text-xl text-center font-light mb-[88px]">
        Kami menjawab apa yang menjadi pertanyaan Anda. Semoga membantu.
      </div>

      {faqList.map((data, index) => {
        return (
          <div
            className="collapse collapse-plus bg-white border-b-2 rounded-none max-w-[980px] py-8"
            key={index}
          >
            <input
              type="radio"
              name="my-accordion-3"
              checked={checkedIndex === index}
              onChange={() => setCheckedIndex(index)}
            />
            <div className="collapse-title text-[22px] font-semibold">
              {data.question}
            </div>
            <div className="collapse-content text-xl font-light text-[#6B6B6B] pt-5">
              <p>{data.answer}</p>
            </div>
          </div>
        );
      })}

      <button
        onClick={() =>
          setFaqList([
            ...faqList,
            {
              question: "Lorem ipsum dolor sit amet?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              question: "Lorem ipsum dolor sit amet?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ])
        }
        className="btn btn-lg btn-primary mx-auto mt-[60px] text-[28px] font-semibold px-[59px] rounded-full flex items-center"
      >
        Lebih Banyak{" "}
        <svg
          width="15"
          height="13"
          viewBox="0 0 15 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.20784 11.1976C8.42843 12.4765 6.57157 12.4765 5.79216 11.1976L1.1259 3.5408C0.31368 2.20803 1.27299 0.499999 2.83375 0.499999L12.1663 0.5C13.727 0.5 14.6863 2.20804 13.8741 3.5408L9.20784 11.1976Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default FAQSection;
