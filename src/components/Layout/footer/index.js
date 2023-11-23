import Link from "next/link";
import LOGO from "@/images/png/logo/markas-icon.png";

const Footer = () => {
  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div className="bg-primary h-[502px] w-full px-[81px] pb-20 z-50">
      <div className="relative z-50 bg-white w-full p-[50px] rounded-lg border-black border-2 h-[440px] mt-[-180px]">
        <div className="grid grid-cols-5 gap-[104px]">
          <div className="col-span-2">
            <div className="text-primary text-[40px] font-bold mb-[18px] ">
              MARKAS
            </div>
            <div className="mb-12 text-base max-w-sm">
              MARKAS adalah tempat kolaborasi atau yang lebih dikenal dengan
              space yang bertujuan menjadi wadah tempat masyarakat melakukan
              perintisan Startup di kota-kota seluruh Indonesia maupun tempat
              belajar bagi para peminat teknologi perusahaan digital.
            </div>
            <div className="flex items-center gap-3 mb-3 text-lg font-semibold">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_702_297)">
                  <path
                    d="M18.2338 3.2835C23.1056 3.2835 23.6825 3.30487 25.5985 3.39034C27.3791 3.46869 28.3407 3.76784 28.9817 4.01713C29.8293 4.34476 30.4418 4.74363 31.0758 5.37754C31.7168 6.01857 32.1085 6.62399 32.4362 7.47157C32.6855 8.1126 32.9846 9.08127 33.0629 10.8548C33.1484 12.7779 33.1698 13.3548 33.1698 18.2195C33.1698 23.0914 33.1484 23.6683 33.0629 25.5843C32.9846 27.3649 32.6855 28.3264 32.4362 28.9675C32.1085 29.8151 31.7097 30.4276 31.0758 31.0615C30.4347 31.7025 29.8293 32.0943 28.9817 32.4219C28.3407 32.6712 27.372 32.9704 25.5985 33.0487C23.6754 33.1342 23.0985 33.1555 18.2338 33.1555C13.3619 33.1555 12.785 33.1342 10.869 33.0487C9.08839 32.9704 8.12685 32.6712 7.48582 32.4219C6.63823 32.0943 6.02569 31.6954 5.39178 31.0615C4.75075 30.4205 4.35901 29.8151 4.03137 28.9675C3.78208 28.3264 3.48293 27.3578 3.40459 25.5843C3.31912 23.6612 3.29775 23.0842 3.29775 18.2195C3.29775 13.3477 3.31912 12.7708 3.40459 10.8548C3.48293 9.07415 3.78208 8.1126 4.03137 7.47157C4.35901 6.62399 4.75787 6.01144 5.39178 5.37754C6.03281 4.73651 6.63823 4.34476 7.48582 4.01713C8.12685 3.76784 9.09552 3.46869 10.869 3.39034C12.785 3.30487 13.3619 3.2835 18.2338 3.2835ZM18.2338 0C13.2836 0 12.6639 0.0213677 10.7195 0.106838C8.78212 0.192309 7.4502 0.505702 6.29635 0.954424C5.09263 1.42451 4.07411 2.04418 3.0627 3.0627C2.04418 4.07411 1.42451 5.09263 0.954424 6.28923C0.505702 7.4502 0.192309 8.775 0.106838 10.7123C0.0213677 12.6639 0 13.2836 0 18.2338C0 23.1839 0.0213677 23.8036 0.106838 25.7481C0.192309 27.6854 0.505702 29.0173 0.954424 30.1712C1.42451 31.3749 2.04418 32.3934 3.0627 33.4048C4.07411 34.4162 5.09263 35.043 6.28923 35.506C7.4502 35.9547 8.775 36.2681 10.7123 36.3536C12.6568 36.439 13.2765 36.4604 18.2266 36.4604C23.1768 36.4604 23.7965 36.439 25.7409 36.3536C27.6783 36.2681 29.0102 35.9547 30.1641 35.506C31.3607 35.043 32.3792 34.4162 33.3906 33.4048C34.402 32.3934 35.0288 31.3749 35.4917 30.1783C35.9405 29.0173 36.2539 27.6925 36.3393 25.7552C36.4248 23.8107 36.4462 23.1911 36.4462 18.2409C36.4462 13.2907 36.4248 12.671 36.3393 10.7266C36.2539 8.78924 35.9405 7.45733 35.4917 6.30347C35.043 5.09263 34.4234 4.07411 33.4048 3.0627C32.3934 2.0513 31.3749 1.42451 30.1783 0.961546C29.0173 0.512825 27.6925 0.199432 25.7552 0.113961C23.8036 0.0213677 23.184 0 18.2338 0Z"
                    fill="#000100"
                  />
                  <path
                    d="M18.2337 8.86719C13.0627 8.86719 8.86755 13.0624 8.86755 18.2334C8.86755 23.4043 13.0627 27.5995 18.2337 27.5995C23.4047 27.5995 27.5999 23.4043 27.5999 18.2334C27.5999 13.0624 23.4047 8.86719 18.2337 8.86719ZM18.2337 24.3089C14.879 24.3089 12.1582 21.5881 12.1582 18.2334C12.1582 14.8786 14.879 12.1578 18.2337 12.1578C21.5885 12.1578 24.3093 14.8786 24.3093 18.2334C24.3093 21.5881 21.5885 24.3089 18.2337 24.3089Z"
                    fill="#000100"
                  />
                  <path
                    d="M30.1569 8.49718C30.1569 9.70802 29.174 10.6838 27.9703 10.6838C26.7595 10.6838 25.7837 9.70089 25.7837 8.49718C25.7837 7.28634 26.7666 6.31055 27.9703 6.31055C29.174 6.31055 30.1569 7.29346 30.1569 8.49718Z"
                    fill="#000100"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_702_297">
                    <rect width="36.4675" height="36.4675" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              INSTAGRAM{" "}
              <svg
                width="10"
                height="10"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.45189 9.501L0.780369 10.1725L2.12341 11.5156L2.79493 10.844L1.45189 9.501ZM3.64289 0.105963L2.69322 0.105963L2.69322 2.00531H3.64289V0.105963ZM10.2906 8.65304V9.60272H12.19V8.65304H10.2906ZM2.79493 10.844L11.9118 1.72716L10.5688 0.384116L1.45189 9.501L2.79493 10.844ZM3.64289 2.00531L11.2403 2.00531V0.105963L3.64289 0.105963V2.00531ZM11.2403 2.00531L12 2.00531L12 0.105964L11.2403 0.105963L11.2403 2.00531ZM12.19 8.65304L12.19 1.05564L10.2906 1.05564L10.2906 8.65304H12.19ZM12.19 1.05564L12.19 0.295897L10.2906 0.2959L10.2906 1.05564L12.19 1.05564Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex items-center gap-3 text-lg font-semibold">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_702_303)">
                  <path
                    d="M36.1043 11.4073C36.1043 11.4073 35.7481 8.89301 34.6513 7.78902C33.2624 6.33601 31.7097 6.32889 30.9974 6.24342C25.8976 5.87305 18.2409 5.87305 18.2409 5.87305H18.2266C18.2266 5.87305 10.5699 5.87305 5.47013 6.24342C4.75787 6.32889 3.20515 6.33601 1.81625 7.78902C0.719379 8.89301 0.370373 11.4073 0.370373 11.4073C0.370373 11.4073 0 14.3631 0 17.3119V20.0754C0 23.0242 0.363251 25.98 0.363251 25.98C0.363251 25.98 0.719379 28.4943 1.80913 29.5983C3.19803 31.0513 5.02141 31.0015 5.83338 31.1582C8.75363 31.4359 18.2338 31.5214 18.2338 31.5214C18.2338 31.5214 25.8976 31.5072 30.9974 31.1439C31.7097 31.0584 33.2624 31.0513 34.6513 29.5983C35.7481 28.4943 36.1043 25.98 36.1043 25.98C36.1043 25.98 36.4675 23.0313 36.4675 20.0754V17.3119C36.4675 14.3631 36.1043 11.4073 36.1043 11.4073ZM14.4659 23.4302V13.1808L24.3164 18.3233L14.4659 23.4302Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_702_303">
                    <rect
                      width="36.4675"
                      height="36.4675"
                      fill="white"
                      transform="translate(0 0.467773)"
                    />
                  </clipPath>
                </defs>
              </svg>
              YOUTUBE{" "}
              <svg
                width="10"
                height="10"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.45189 9.501L0.780369 10.1725L2.12341 11.5156L2.79493 10.844L1.45189 9.501ZM3.64289 0.105963L2.69322 0.105963L2.69322 2.00531H3.64289V0.105963ZM10.2906 8.65304V9.60272H12.19V8.65304H10.2906ZM2.79493 10.844L11.9118 1.72716L10.5688 0.384116L1.45189 9.501L2.79493 10.844ZM3.64289 2.00531L11.2403 2.00531V0.105963L3.64289 0.105963V2.00531ZM11.2403 2.00531L12 2.00531L12 0.105964L11.2403 0.105963L11.2403 2.00531ZM12.19 8.65304L12.19 1.05564L10.2906 1.05564L10.2906 8.65304H12.19ZM12.19 1.05564L12.19 0.295897L10.2906 0.2959L10.2906 1.05564L12.19 1.05564Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <div className="mb-[30px] text-[22px] font-light text-primary">
              REGIONAL
            </div>

            <Link href="/booking?tab=0">
              <div className="mb-[30px] text-2xl font-semibold">SURABAYA</div>
            </Link>
            <Link href="/booking?tab=1">
              <div className="mb-[30px] text-2xl font-semibold">JAKARTA</div>
            </Link>
            <Link href="/booking?tab=2">
              <div className="mb-[30px] text-2xl font-semibold">BANDUNG</div>
            </Link>
            <Link href="/booking?tab=3">
              <div className="mb-[30px] text-2xl font-semibold">DENPASAR</div>
            </Link>
          </div>
          <div className="">
            <div className="mb-[30px] text-[22px] font-light text-primary">
              CONTACT US
            </div>
            <Link href="/booking">
              <div className=" mb-[30px] text-2xl font-semibold">BOOKING</div>
            </Link>
            <Link
              href="/#faq-section"
              onClick={() => scrolltoHash("faq-section")}
            >
              <div className="mb-[30px] text-2xl font-semibold">FAQ</div>
            </Link>
          </div>
          <div className="">
            <div className="mb-[30px] text-[22px] font-light text-primary">
              ABOUT
            </div>
            <Link
              href="/#philosophy"
              onClick={() => scrolltoHash("philosophy")}
            >
              <div className="mb-[30px] text-2xl font-semibold">PHILOSOPHY</div>
            </Link>
            <Link href="/events">
              <div className="mb-[30px] text-2xl font-semibold">EVENTS</div>
            </Link>
            <div className="mb-[30px] text-2xl font-semibold">CREDITS</div>
          </div>
          <div className="absolute -bottom-16 -right-16 -z-1 opacity-25">
            <Image src={LOGO} width={320} alt="background icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
