const Footer = () => {
  return (
    <div className="bg-primary h-[502px] w-full px-[81px] pb-20 z-50">
      <div className="relative z-50 bg-white w-full p-[50px] rounded-lg border-black border-2 h-[440px] mt-[-80px]">
        <div className="grid grid-cols-5 gap-[104px]">
          <div className="col-span-2">
            <div className="mb-[18px]">MARKAS</div>
            <div className="mb-12">
              MARKAS adalah tempat kolaborasi atau yang lebih dikenal dengan
              space yang bertujuan menjadi wadah tempat masyarakat melakukan
              perintisan Startup di kota-kota seluruh Indonesia maupun tempat
              belajar bagi para peminat teknologi perusahaan digital.
            </div>
            <div className="mb-3">Instagram</div>
            <div>Youtube</div>
          </div>
          <div className="">
            <div className="mb-[30px]"> Regional</div>
            <div className="mb-[30px]"> Surabaya</div>
            <div className="mb-[30px]"> Jakarta</div>
            <div className="mb-[30px]"> Bandung</div>
            <div className="mb-[30px]"> Denpasar</div>
          </div>
          <div className="">
            <div className="mb-[30px]"> Contact us</div>
            <div className="mb-[30px]"> Booking</div>
            <div className="mb-[30px]"> FAQ</div>
          </div>
          <div className="">
            <div className="mb-[30px]"> About</div>
            <div className="mb-[30px]"> Philosophy</div>
            <div className="mb-[30px]"> Events</div>
            <div className="mb-[30px]"> Credits</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
