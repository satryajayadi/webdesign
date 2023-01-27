import KEMEJA from "../public/KEMEJA.png";
import Image from "next/image";
import { Rate } from "./svg";
import CELANA from "../public/CELANA.png";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
const Item = () => {
  const Router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="item flex overflow-x-scroll  gap-6"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div
        className="w-full flex-none h-96 md:h-80 md:w-44 rounded-xl overflow-hidden bg-white shadow-xl"
        onClick={() => Router.push("./product")}
      >
        <Image src={CELANA} className="w-full h-52 md:h-36" />
        <div className="p-2 flex flex-col">
          <div>
            <p className="pb-2 text-svg">Shirt</p>
            <p className="font-bold">Men’s Long Pant Dark Blue by SatFashion</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="text-hijau font-bold">Rp.200.000</p>
            </div>
            <div className="flex items-center gap-x-2 text-svg py-2">
              <Rate />
              <p className="text-xs">4.9 / 2456</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-none h-96 md:h-80 md:w-44 rounded-xl overflow-hidden bg-white shadow-xl">
        <Image src={KEMEJA} className="w-full h-52 md:h-36" />
        <div className="p-2 flex flex-col">
          <div>
            <p className="pb-2 text-svg">Shirt</p>
            <p className="font-bold">
              Men’s Shirt With Box Design by SatFashion
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="text-hijau font-bold">Rp.150.000</p>
            </div>
            <div className="flex items-center gap-x-2 text-svg py-2">
              <Rate />
              <p className="text-xs">4.7 / 2456</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-none h-96 md:h-80 md:w-44 rounded-xl overflow-hidden bg-white shadow-xl">
        <Image src={KEMEJA} className="w-full h-52 md:h-36" />
        <div className="p-2 flex flex-col">
          <div>
            <p className="pb-2 text-svg">Shirt</p>
            <p className="font-bold">
              Men’s Shirt With Box Design by SatFashion
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="text-hijau font-bold">Rp.150.000</p>
            </div>
            <div className="flex items-center gap-x-2 text-svg py-2">
              <Rate />
              <p className="text-xs">4.7 / 2456</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-none h-96 md:h-80 md:w-44 rounded-xl overflow-hidden bg-white shadow-xl">
        <Image src={KEMEJA} className="w-full h-52 md:h-36" />
        <div className="p-2 flex flex-col">
          <div>
            <p className="pb-2 text-svg">Shirt</p>
            <p className="font-bold">
              Men’s Shirt With Box Design by SatFashion
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="text-hijau font-bold">Rp.150.000</p>
            </div>
            <div className="flex items-center gap-x-2 text-svg py-2">
              <Rate />
              <p className="text-xs">4.7 / 2456</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 flex-none md:h-80 md:w-44 rounded-xl overflow-hidden bg-white shadow-xl">
        <Image src={KEMEJA} className="w-full h-52 md:h-36" />
        <div className="p-2 flex flex-col">
          <div>
            <p className="pb-2 text-svg">Shirt</p>
            <p className="font-bold">
              Men’s Shirt With Box Design by SatFashion
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="text-hijau font-bold">Rp.150.000</p>
            </div>
            <div className="flex items-center gap-x-2 text-svg py-2">
              <Rate />
              <p className="text-xs">4.7 / 2456</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 flex-none md:h-80 md:w-44 rounded-xl overflow-hidden bg-white shadow-xl">
        <Image src={KEMEJA} className="w-full h-52 md:h-36" />
        <div className="p-2 flex flex-col">
          <div>
            <p className="pb-2 text-svg">Shirt</p>
            <p className="font-bold">
              Men’s Shirt With Box Design by SatFashion
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="text-hijau font-bold">Rp.150.000</p>
            </div>
            <div className="flex items-center gap-x-2 text-svg py-2">
              <Rate />
              <p className="text-xs">4.7 / 2456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
