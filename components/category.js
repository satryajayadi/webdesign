import Image from "next/image";
import CELANA from "../public/CELANA.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
const Category = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="bg-white rounded-xl w-full md:w-full xl:w-2/4 p-4 border border-bg"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl font-bold">Shop by Category</p>
        <p className="text-md text-hijau font-bold">See more</p>
      </div>
      <div>
        <div className="flex flex-row items-center gap-x-3 overflow-x-scroll py-8">
          <div className="bg-gray-100 w-36 h-36 rounded-md flex-none border border-gray-300">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-36 h-36 rounded-md flex-none border border-gray-300">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-36 h-36 rounded-md flex-none border border-gray-300">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-36 h-36 rounded-md flex-none border border-gray-300">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-36 h-36 rounded-md flex-none border border-gray-300">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-36 h-36 rounded-md flex-none border border-gray-300">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-36 h-36 rounded-md flex-none border border-gray-300">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-36 h-36 rounded-md flex-none border border-gray-300">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-36 h-36 rounded-md flex-none border border-gray-300">
            <Image src={CELANA} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
