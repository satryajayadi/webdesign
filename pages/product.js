import Layout from "../components/layout";
import Galery from "../components/product/galery";
import Amount from "../components/product/amount";
import Description from "../components/product/description";
import Item from "../components/item";
import Rating from "../components/product/rating";
import { useState } from "react";
const Product = () => {
  const [state, setState] = useState("size");
  return (
    <>
      <div className="w-full px-4 md:px-14 xl:px-36 lg:px-44  h-fit flex flex-col">
        {/* <div className="w-full h-fit flex flex-col md:flex-col xl:flex-row gap-4 z-50 p-6">
          <Route />
        </div> */}
        <div className="p-6 flex flex-col md:flex-col lg:flex-row w-full gap-14">
          <Galery />
          <Description state={state} setState={setState} />
          <Amount state={state} />
        </div>
        <div>
          <Rating />
        </div>
        <div>
          <Item />
        </div>
      </div>
    </>
  );
};

Product.layout = Layout;
export default Product;
