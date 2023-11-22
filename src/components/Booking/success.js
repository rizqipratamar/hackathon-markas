import Link from "next/link";

const BookingSuccess = () => {
  return (
    <div className="w-screen px-[110px] pt-[30px] min-h-screen text-left">
      <div className="w-full text-center justify-center mt-[66px] tfont-semibold gap-10">
        <div className="text-[48px] text-bold ">
          PESANAN KAMU TELAH TERKIRIM
        </div>
        <div className="text-[28px] mt-[35px]">
          Admin MARKAS akan meninjau kegiatan kamu dan akan dikonfirmasi 1x24
          jam <br /> melalu email dan nomor telepon yang telah dicantumkan
        </div>
      </div>
      <div className="mt-20 mx-auto w-full flex justify-center">
        <Link href={`/`}>
          <button className="btn btn-lg btn-primary text-[28px] rounded-2xl px-20 ">
            Kembali Ke beranda
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
