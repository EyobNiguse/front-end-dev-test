"use client"
import { useEffect, useRef, useState } from "react";
import Product, { ProductProps } from "./product";
 

export default function ProductsList() {
  const mockProductData: ProductProps[] = [
    {
      name: "Virtual",
      price: "$2.74",
      marketCap: "$1.7B",
      bgUrl: "product1.png",
      increment: "0.59%",
      decrement: null,
      hasTopCheck: false,
      isVerified: false,
    },
    {
      name: "Al16Z",
      price: "$0.0873",
      marketCap: "$962K",
      bgUrl: "product2.png",
      decrement: "11.59%",
      hasTopCheck: false,
      isVerified: true,
    },
    {
      name: "Ticker3",
      price: "$0.1232",
      marketCap: "$701M",
      bgUrl: "product3.png",
      hasTopCheck: false,
      isVerified: true,
    },
    {
      name: "Tiker4",
      price: "$25.51",
      marketCap: "$988",
      bgUrl: "product4.png",
      hasTopCheck: false,
      isVerified: false,
    },
  ];
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = () => {
    console.log("called",carouselRef);
    if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const itemWidth = 300; // Width of each item
        const index = Math.ceil(scrollLeft / itemWidth);
        console.log(scrollLeft,index,"scroll left")
        setScrollIndex(Math.min(Math.max(index, 0), mockProductData.length - 1));
    }
  };
  const handleIndicatorClick = (index: number) => {
    if (carouselRef.current) {
        const itemWidth = 300; // Width of each item
        carouselRef.current.scrollTo({
            left: itemWidth * index,
            behavior: 'smooth' // Smooth scrolling
        });
        setScrollIndex(index); // Update the current index
    }
};
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
        carousel.addEventListener('scroll', handleScroll);
    }
    return () => {
        if (carousel) {
            carousel.removeEventListener('scroll', handleScroll);
        }
    };
}, []);
  return (
    <div className="md:w-3/4 md:mx-auto mt-10 ">
      <h1 className="font-bold p-10 md:pl-0 text-[32px]">Hottest</h1>
      <div className=" realtive flex space-x-4  h-[50vh] max-w-[600px]  md:overflow-x-visible overflow-x-scroll hide-scroll-bar" ref={carouselRef}>
        {mockProductData.map((item, index) => (
          <div key={index} className="min-w-[300px] p-3 md:p-0 ">
            <Product
              name={item.name}
              price={item.price}
              marketCap={item.marketCap}
              bgUrl={item.bgUrl}
              hasTopCheck={item.hasTopCheck}
              isVerified={item.isVerified}
              increment={item.increment}
              decrement={item.decrement}
            />
          </div>
        ))}
      </div>
      <div className="md:hidden flex justify-center space-x-1 mt-2 h-[10vh] p-6">
                    {mockProductData.map((_, index) => {
                        console.log(index,scrollIndex == index ,"index here");
                        return <div
                        onClick={()=>handleIndicatorClick(index)}
                            key={index}
                            className={`h-1 w-10    rounded-sm   ${scrollIndex == index ? 'bg-gray-300' : 'bg-gray-400'}`}
                        
                        />
})}
                </div>
    </div>
  );
}
