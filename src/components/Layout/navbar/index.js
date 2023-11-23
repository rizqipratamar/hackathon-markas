import Link from "next/link";
import Image from "next/image";
import LOGO_TEXT from "@/images/png/logo/markas-text-red.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-[84px] py-6">
      <div className="flex-1">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Link href="/" className="btn btn-ghost">
          <Image src={LOGO_TEXT} width={182} height={66} alt="icon text" />
        </Link>
      </div>
      <div className="flex-none gap-[82px] text-primary text-[22px] font-light">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/#philosophy">Philosophy</Link>
        <Link href="/events">Events</Link>
        <Link href="/booking">Booking</Link>
        <div>Contact US</div>
      </div>
    </div>
  );
};

export default Navbar;
