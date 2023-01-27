import Layout from "../components/layout";
import Galery from "../components/product/galery";
import Description2 from "../components/product/description2";
import Alamat from "../components/product/alamat";
import Amount2 from "../components/product/amount2";

const Checkout = () => {
  return (
    <>
      <div className="w-full px-4 md:px-14 xl:px-36 lg:px-44  h-fit flex flex-col">
        {/* <div className="w-full h-fit flex flex-col md:flex-col xl:flex-row gap-4 z-50 p-6">
          <Route />
        </div> */}
        <div className="p-6 flex flex-col md:flex-col lg:flex-row w-full gap-14">
          <Galery />
          <Description2 />
          <Amount2 />
        </div>
        <div className="pl-5">
          <Alamat />
        </div>
        <div className="w-full h-28"></div>
        {/* <div>
          <Item />
        </div> */}
      </div>
    </>
  );
};

Checkout.layout = Layout;
export default Checkout;
