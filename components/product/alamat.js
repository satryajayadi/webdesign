import { SvgAccount, SvgArrow } from "../svg";
import Image from "next/image";
import Bcafoto from "../../public/Bcafoto.png";

const Alamat = () => {
  return (
    <>
      <div className="w-full md:w-9/12 h-auto bg-white drop-shadow-md rounded-md py-2">
        <div className="flex px-4 md:px-12 font-bold text-xm items-center ">
          <SvgAccount />
          <p>Satrya Jayadi</p>
        </div>
        <div className="px-12 py-2 flex justify-between">
          <p className="">
            Jl. Tukad Petanu, Kec. Denpasar Sel., Kota Denpasar, Bali, 80224
            [SatFashion Note: Tempat batako]Denpasar Selatan,...
          </p>
          <SvgArrow />
        </div>
        <div className="w-full h-auto bg-white pt-2 border flex flex-col md:flex-row md:items-center px-4 md:p-12 gap-4 md:gap-52 ">
          <div className="">
            <p className="font-bold text-xl">Chose Delivery</p>
            <select className="border-2 rounded-md w-52  ">
              <option>Reguler</option>
              <option>Express</option>
              <option>Extra Express</option>
            </select>
          </div>
          <div className="">
            <p className="font-bold text-xl">Chose Courier</p>
            <select className="border-2 rounded-md w-52  ">
              <option>Reguler</option>
              <option>Express</option>
              <option>Extra Express</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center px-12 py-6 gap-5">
            <Image src={Bcafoto} />
            <p className="font-bold text-xl">BCA Virtual Account</p>
          </div>
          <div className="pr-11">
            <SvgArrow />
          </div>
        </div>
      </div>
    </>
  );
};

export default Alamat;
