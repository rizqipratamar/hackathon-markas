"use client";
import { setSessionStorage } from "@/utils/storage";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function postEventData(payload) {
  const response = await fetch(`/api`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response;
}

const FormBooking = () => {
  const query = useSearchParams();
  const selectedRoom = query.get("name");
  const selectedDate = query.get("date");

  const router = useRouter();

  const [eventName, setEventName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMale, setIsMale] = useState(true);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await postEventData({
      name: selectedRoom + " - " + eventName,
      date: selectedDate,
      type: type,
      desc: description,
    });

    const parsed = await response.json().then((data) => {
      return data;
    });

    setLoading(false);
    setSessionStorage("link", parsed?.link);
    setSessionStorage("htmlLink", parsed?.htmlLink);
    router.push(
      `/booking?name=${selectedRoom}&date=${selectedDate}&success=true`
    );
  };

  return (
    <div className="w-screen px-[110px] pt-[30px] min-h-screen text-left">
      <div className="w-full text-center justify-center flex mt-[66px] text-[32px] font-semibold gap-10">
        <div className="form-control w-full text-[28px]">
          <label className="label">
            <span className="label-text text-[28px] ">Nama</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full mt-4 rounded-full"
          />

          <label className="label mt-8">
            <span className="label-text text-[28px]">Gender</span>
          </label>
          <div className="flex gap-4 text-[28px]">
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary my-auto"
              checked={isMale}
              onChange={() => setIsMale(!isMale)}
            />{" "}
            <div>Male</div>
            <input
              type="radio"
              name="radio-2"
              checked={!isMale}
              className="radio radio-primary my-auto"
              onChange={() => setIsMale(!isMale)}
            />
            <div>Female</div>
          </div>

          <label className="label mt-6">
            <span className="label-text text-[28px] ">Email</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full mt-4 rounded-full"
          />

          <label className="label mt-6">
            <span className="label-text text-[28px] ">Nomor Telepon</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full mt-4 rounded-full"
          />

          <label className="label mt-6">
            <span className="label-text text-[28px] ">
              Instansi/Komunitas/Perusahaan
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full mt-4 rounded-full"
          />

          <label className="label mt-6">
            <span className="label-text text-[28px]  ">Jenis Kegiatan</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-md mt-4 rounded-full"
            onChange={(e) => setType(e.target.value)}
          />

          <label className="label mt-6">
            <span className="label-text text-[28px] ">Nama Kegiatan</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full mt-4 rounded-full"
            onChange={(e) => setEventName(e.target.value)}
          />

          <label className="label mt-6">
            <span className="label-text text-[28px] ">Deskripsi Singkat</span>
          </label>
          <textarea
            className="textarea textarea-bordered mt-4 h-[391px] rounded-xl"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-16 mx-auto w-full flex justify-end">
        {loading ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : (
          <button
            className="btn btn-lg btn-primary text-[28px] rounded-2xl px-20 "
            onClick={handleSubmit}
          >
            Pesan
          </button>
        )}
      </div>
    </div>
  );
};

export default FormBooking;
