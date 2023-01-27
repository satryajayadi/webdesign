import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Bill = () => {
  const [state, setState] = useState("electric"); //electric, internet,flight, topup
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="bg-white w-full md:w-full xl:w-2/4 rounded-xl border border-bg"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className="flex-row flex pt-4 justify-around">
        <div className="w-full flex flex-row justify-around h-fit">
          <button
            onClick={() => setState("electric")}
            className={`${
              state === "electric"
                ? "border-hijau text-hijau"
                : "border-transparent text-svg"
            } pb-4 border-b-4 duration-500 text-xs px-2 md:text-xl font-bold`}
          >
            Electricity Bill
          </button>

          <button
            onClick={() => setState("internet")}
            className={`${
              state === "internet"
                ? "border-hijau text-hijau"
                : "border-transparent text-svg"
            } pb-4 border-b-4 duration-500 text-xs px-2 md:text-xl font-bold`}
          >
            Internet Data
          </button>

          <button
            onClick={() => setState("flight")}
            className={`${
              state === "flight"
                ? "border-hijau text-hijau"
                : "border-transparent text-svg"
            } pb-4 border-b-4 duration-500 text-xs px-2 md:text-xl font-bold`}
          >
            Flight
          </button>

          <button
            onClick={() => setState("topup")}
            className={`${
              state === "topup"
                ? "border-hijau text-hijau"
                : "border-transparent text-svg"
            } pb-4 border-b-4 duration-500 text-xs px-2 md:text-xl font-bold`}
          >
            Top Up
          </button>
        </div>
      </div>
      <div className="border-t border-gray-300 w-full h-fit flex flex-col md:flex-row items-end gap-4 py-10 md:pt-10 px-4">
        <div className="w-full md:w-5/7 flex flex-col gap-y-6">
          <p className="text-xl font-semibold">Phone Number</p>
          <div className="relative ">
            <p className="bg-bg absolute py-3 px-4 rounded-xl text-base">62+</p>
            <input
              className="py-2.5 border rounded-xl w-full pl-16 outline-none"
              placeholder="8532319752"
            />
          </div>
        </div>
        <div className="w-full md:w-52 flex flex-col gap-y-6">
          <p className="text-xl font-semibold">Select Data Package</p>
          <div className="relative w-full">
            <div className="px-4 bg-bg rounded-xl">
              <select className="p-2.5 border rounded-xl w-44 border-none outline-none bg-bg">
                <option className="w-full">50 GB / 30 Days</option>
              </select>
            </div>
          </div>
        </div>
        <button className="bg-hijau rounded-xl text-white py-2.5 w-44 px-2 h-11">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Bill;
