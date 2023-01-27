import Navbar from "../components/navbar";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Category from "../components/category";
import Bill from "../components/bill";
import Carousel from "../components/carousel";
import Product from "../components/product";
import Navigation from "../components/navigation";
import Item from "../components/item";

export default function Home() {
  return (
    <>
      <div className=" z-10">
        <Carousel />
      </div>
      <div className="w-full px-4 md:px-14 xl:px-90 lg:px-80 h-fit flex flex-col">
        <div className="w-full h-fit flex flex-col md:flex-col xl:flex-row gap-4 -translate-y-12 z-50">
          <Category />
          <Bill />
        </div>
        <div className="flex flex-col gap-4">
          <Product />
          <Product />
        </div>
        <div>
          <Navigation />
        </div>
        <div>
          <Item />
        </div>
      </div>
    </>
  );
}

Home.layout = Layout;
