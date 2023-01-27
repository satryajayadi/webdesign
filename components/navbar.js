import {
  SvgMobile,
  SvgLocation,
  SvgSearch,
  SvgBasket,
  SvgAccount,
  SvgNotification,
  SvgArrowProfile,
} from "./svg";
import Image from "next/image";
import Logo from "../public/logobener.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const r = useRouter();
  return (
    <>
      <div className="bg-satrya w-full h-10 px-2 md:px-14 lg:px-44 flex items-center justify-between z-10">
        <div className=" flex gap-2 items-center ">
          <SvgMobile />
          <p className="text-svg text-xs ">Download SatFashion app now</p>
        </div>
        <div className="text-svg text-xs md:flex gap-3 items-center hidden ">
          <p>Promo</p>
          <p>Help & Center</p>
          <p>SatFashion Store</p>
          <p>Language</p>
        </div>
      </div>
      {/**Navbar 1 */}
      <div className="bg-satrya2 w-full h-24 flex items-center px-4 md:px-14 lg:px-44 gap-4 z-20">
        <Image width={150} height={90} src={Logo} className="hidden md:block" />
        <button onClick={() => r.replace("/")} className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </button>

        <div className="w-full hidden md:block">
          <div className="flex text-svg text-xs gap-1 ">
            <SvgLocation />
            <p>Deliver to</p>
          </div>
          <div>
            <p className="text-white font-semibold">Denpasar, Indonesia</p>
          </div>
        </div>
        <div className="relative flex items-center">
          <select className=" h-[40px] rounded-l-md bg-[#6C6C6C] text-xs text-svg pl-1 outline-none hidden md:hidden lg:block">
            <option>All Category</option>
            <option>T-shirt</option>
            <option>Shirt</option>
            <option>Bag</option>
            <option>Pants</option>
            <option>Best Product</option>
            <option>Special Product</option>
            <option>Cap</option>
          </select>
          <input
            className="bg-white w-44 md:w-80 p-2 rounded-md md:rounded-r-md"
            placeholder="Search..."
          />
          <div className="absolute top-0 right-0 bg-hijau  rounded-r-md p-[9.5px]  ">
            <SvgSearch />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SvgBasket />
          {/* <div className="w-0.5 h-7 bg-svg"></div> */}
          <SvgNotification />
          <SvgAccount />
          <div className="hidden md:block">
            <SvgArrowProfile />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
