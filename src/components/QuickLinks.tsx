"use client"
import { useEffect, useRef, useState } from "react";
import QuickLink from "./QuickLink";

export default function QuickLinks(){
    const mocktitle = ["About","Blog","Something Else","TBD"];

     const carouselRef = useRef<HTMLDivElement | null>(null);
      const [scrollIndex, setScrollIndex] = useState(0);
    
      const handleScroll = () => {
     
        if (carouselRef.current) {
            const scrollLeft = carouselRef.current.scrollLeft;
            const itemWidth = 300; // Width of each item
            const index = Math.ceil(scrollLeft / itemWidth);
 
            setScrollIndex(Math.min(Math.max(index, 0), mocktitle.length - 1));
        }
      };
      const handleIndicatorClick = (index: number) => {
        if (carouselRef.current) {
            const itemWidth = 300;  
            carouselRef.current.scrollTo({
                left: itemWidth * index,
                behavior: 'smooth'  
            });
            setScrollIndex(index);  
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
    return <div className="">
            <h1 className="text-[32px] font-[600] p-10 md:pl-0">Learn More</h1>
            <div className=" realtive flex space-x-4  h-[20vh] max-w-[600px]  md:overflow-x-visible overflow-x-scroll  hide-scroll-bar  w-full" ref={carouselRef}>
                    {mocktitle.map((item,index)=> <div  className="p-3 md:p-0" key={index}  > <QuickLink title={item}/> </div>)}
            </div>
            <div className="md:hidden flex justify-center space-x-1 mt-2 h-[10vh] p-6">
                    {mocktitle.map((_, index) => {
                       
                        return <div
                        onClick={()=>handleIndicatorClick(index)}
                            key={index}
                            className={`h-1 w-10    rounded-sm   ${scrollIndex == index ? 'bg-gray-300' : 'bg-gray-400'}`}
                        
                        />
})}
                </div>
    </div>;
}