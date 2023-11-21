import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-[91px]">
      <div className="flex-1">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Link href="/" className="btn btn-ghost text-xl">
          Markas
        </Link>
      </div>
      <div className="flex-none gap-[82px]">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <div>Philosophy</div>
        <Link href="/events">Events</Link>
        <Link href="/booking">Booking</Link>
        <div>Contact US</div>
      </div>
    </div>
  );
};

export default Navbar;
