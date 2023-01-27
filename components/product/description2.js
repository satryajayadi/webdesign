const Description2 = () => {
  return (
    <div className="w-full md:w-2/4 h-fit ">
      <p className="text-4xl font-bold">
        Men’s Long Pant Dark Blue by SatFashion
      </p>
      <div className="md:flex">
        <p>324g</p>
      </div>
      <div className="md:pt-14 pt-8">
        <div className="flex">
          <div className="w-14 h-14 border rounded-md flex items-center justify-center font-bold bg-hijau text-white">
            M
          </div>
        </div>
      </div>
      <div className="flex gap-6 pt-9 ">
        <p className="text-hijau font-bold">Additional Note</p>
        <div className=" h-6 border"></div>
        <div className="w-7/12 h-6 rounded-md border flex gap-12 md:gap-36 lg:gap-36x  border-10">
          <p className="pl-2">-</p>
          <p className="font-bold">1</p>
          <p className="text-hijau font-bold">+</p>
        </div>
      </div>
      <div className="pt-6 flex gap-12 md:gap-56 items-center ">
        <p className="font-bold text-xs">Warranty in case of damage</p>
        <div className="flex md:px-2">
          <p className="text-xs font-bold">Rp.10.000</p>
          <p className="text-xs text-svg pr-2">/item</p>
          <input type="checkbox" className="bg-hijau"></input>
        </div>
      </div>
    </div>
  );
};

export default Description2;
