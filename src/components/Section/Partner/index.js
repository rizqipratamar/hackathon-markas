import Image from "next/image";
import PARTNER_1 from "@/images/png/partner-1.png";
import PARTNER_2 from "@/images/png/partner-2.png";
import PARTNER_3 from "@/images/png/partner-3.png";
import PARTNER_4 from "@/images/png/partner-4.png";
import PARTNER_5 from "@/images/png/partner-5.png";
import PARTNER_6 from "@/images/png/partner-6.png";
import PARTNER_7 from "@/images/png/partner-7.png";
import PARTNER_8 from "@/images/png/partner-8.png";
import PARTNER_9 from "@/images/png/partner-9.png";

const PartnerSection = () => {
  return (
    <div className="min-h-screen w-screen p-[173px]">
      <div>PROGRAM and PARTNER</div>
      <div className="grid grid-cols-3 gap-[43px]">
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_2} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_3} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_4} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_5} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_6} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_7} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_8} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_9} />
        </div>{" "}
      </div>
    </div>
  );
};

export default PartnerSection;
