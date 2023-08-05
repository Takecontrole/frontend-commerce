import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import first from "./homeImgs/aaa.jpg";
import second from "./homeImgs/aaaa.png";
import third from "./homeImgs/aaaaa.jpg";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
        <div className="flex w-full">
        <div className="w-9/12">
        <BestDeals /> 
        <Events />
        <FeaturedProduct />
        </div>
        <div className="w-3/12 m-4">
                  <img
            src={first}
            alt=""
            className="w-full h-auto object-contain mb-4"
          /> 
                            <img
            src={second}
            alt=""
            className="w-full h-auto object-contain mb-4"
          />
                  <img
            src={third}
            alt=""
            className="w-full h-auto object-contain mb-4"
          />
        </div>
        </div>
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage