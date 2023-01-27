import Image from "next/image";
import CELANA from "../../public/CELANA.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Galery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-right" data-aos-duration="2000">
      <div className="w-full md:w-64 lg:w-96 h-fit flex flex-col gap-4">
        <Image
          src={CELANA}
          className="w-full h-full rounded-xl overflow-hidden"
        />
        <div class="grid grid-cols-3 grid-flow-col gap-4 w-full">
          {/* <div className="bg-gray-100 w-full h-24 rounded-xl overflow-hidden">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-full h-24 rounded-xl overflow-hidden">
            <Image src={CELANA} />
          </div>
          <div className="bg-gray-100 w-full h-24 rounded-xl overflow-hidden">
            <Image src={CELANA} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Galery;
