import Image from "next/image";
import PARTNER_1 from "@/images/png/partner-1.png";
import GERAKAN_IMG from "@/images/png/logo/1000-startup.png";
import KOMINFO_IMG from "@/images/png/logo/kominfo.png";
import SSI_IMG from "@/images/png/logo/ssi.png";
import SB_IMG from "@/images/png/logo/sekolah-beta.png";
import SBI_IMG from "@/images/png/logo/sekolah-beta-intensif.png";
import SBD_IMG from "@/images/png/logo/sekolah-beta-daring.png";
import SG_IMG from "@/images/png/logo/startup-grind.png";
import INDEV_IMG from "@/images/png/logo/indev.png";
import GDEV_IMG from "@/images/png/logo/google-dev.png";

const partnerList = [
  {
    name: "Gerakan Nasional 1000 Startup Digital",
    icon: GERAKAN_IMG,
    width: 266,
    height: 168,
  },
  {
    name: "Kominfo",
    icon: KOMINFO_IMG,
    width: 204,
    height: 168,
  },
  {
    name: "Startup Studio ID",
    icon: SSI_IMG,
    width: 238,
    height: 173,
  },
  {
    name: "Sekolah Beta",
    icon: SB_IMG,
    width: 261,
    height: 85,
  },
  {
    name: "Sekolah Beta Intensif",
    icon: SBI_IMG,
    width: 228,
    height: 109,
  },
  {
    name: "Sekolah Beta Kelas Daring",
    icon: SBD_IMG,
    width: 251,
    height: 91,
  },
  {
    name: "Startup Grind",
    icon: SG_IMG,
    width: 223,
    height: 119,
  },
  {
    name: "Indev",
    icon: INDEV_IMG,
    width: 238,
    height: 127,
  },
  {
    name: "Google Developer Groups",
    icon: GDEV_IMG,
    width: 309,
    height: 181,
  },
];

const PartnerSection = () => {
  return (
    <div className="min-h-screen w-screen text-center mt-[236px] max-w-[1166px]">
      <div className="text-5xl font-extrabold mb-[108px]">
        PROGRAM AND PARTNER
      </div>
      <div className="grid grid-cols-3 gap-[43px]">
        {partnerList.map((data, index) => {
          return (
            <div className="rounded rounder-lg bg-white mx-auto" key={index}>
              <Image
                src={data.icon}
                width={data.width}
                height={data.height}
                alt={data.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerSection;
