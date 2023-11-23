const AttentionSection = () => {
  return (
    <div className="w-screen px-[110px] pt-[110px] min-h-screen bg-primary text-left mt-[226px] text-white">
      <div className="text-white text-[36px]">Hal yang perlu diperhatikan</div>
      <div className="grid grid-cols-2 mt-[90px]">
        <div>
          <div className="flex gap-2 text-[28px]">
            <div className=" ">1. </div>
            <div className=" "> Membawa Botol Minum Pribadi</div>
          </div>
          <div className="pl-7 text-[20px] font-light mt-3">
            Selama berada di MARKAS, para pengunjung diwajibkan untuk membawa
            botol minum pribadi yang dapat diisi ulang dengan dispenser yang
            tersedia dibeberapa titik.
          </div>
        </div>
        <div>
          <div className="flex gap-2 text-[28px]">
            <div className=" ">4. </div>
            <div className=" ">Tidak Membawa Hewan</div>
          </div>
          <div className="pl-9 text-[20px] font-light mt-3">
            Demi kenyamanan bersama, harap tidak membawa masuk hewan peliharaan
            ataupun binatang lain kedalam area MARKAS.
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-2 text-[28px]">
            <div className=" ">2. </div>
            <div className=" ">Reschedule dan Replace Ruangan</div>
          </div>
          <div className="pl-7 text-[20px] font-light mt-3">
            Setiap penggantian jadwal atau penggantian tipe ruangan dapat
            dilakukan selambat-lambatnya 3 hari sejak masa pemesanan.
          </div>
        </div>
        <div className="mt-10">
          <div className="flex gap-2 text-[28px]">
            <div className=" ">5. </div>
            <div className=" ">Menjaga Kebersihan Ruangan</div>
          </div>
          <div className="pl-8 text-[20px] font-light mt-3">
            Demi kenyamanan bersama, harap menjaga fasilitas yang berada didalam
            area MARKAS. Setiap fasilitas yang dirusakkan harus diganti seperti
            sediakala.
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-2 text-[28px]">
            <div className=" ">3. </div>
            <div className=" ">Harap Melepas Alas Kaki</div>
          </div>
          <div className="pl-7 text-[20px] font-light mt-3">
            Demi menjaga kebersihan ruangan, setiap pengunjung MARKAS harap
            melepaskan alas kaki dan meletakkannya pada tempat penyimpanan
            khusus alas kaki yang telah tersedia di area beranda.
          </div>
        </div>
        <div className="mt-10">
          <div className="flex gap-2 text-[28px]">
            <div className=" ">6. </div>
            <div className=" ">Area Bebas Asap Rokok</div>
          </div>
          <div className="pl-8 text-[20px] font-light mt-3">
            Demi kenyamanan bersama, harap tidak menyalakan rokok dalam bentuk
            apapun selama berada didalam area MARKAS. Setiap pelanggar akan
            dikenakan denda sanksi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttentionSection;
