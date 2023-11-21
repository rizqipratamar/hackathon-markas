import Image from "next/image";
import PARTNER_1 from "@/images/png/partner-1.png";

const PartnerSection = () => {
  return (
    <div className="min-h-screen w-screen p-[173px]">
      <div>PROGRAM and PARTNER</div>
      <div className="grid grid-cols-3 gap-[43px]">
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>
        <div className="rounded rounder-lg bg-white">
          <Image src={PARTNER_1} />
        </div>{" "}
      </div>
    </div>
  );
};

export default PartnerSection;
