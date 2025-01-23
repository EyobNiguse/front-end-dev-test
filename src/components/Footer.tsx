import { FaFacebook,FaInstagram,FaGithub  } from "react-icons/fa";
 
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

export default function Footer(){
    return <footer className="bg-white    flex  flex-col">
    <div className=" mx-auto py-6 flex flex-col  md:justify-between md:items-center md:p-10">
        <div className="md:flex block  md:space-x-4 space-x-2 md:p-10 text-[15px] md:text-[23px]">
            <a href="#" className="text-gray-600 hover:text-blue-500">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Blog</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Jobs</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Press</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Accessibility</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Partners</a>
        </div>
        <div className="flex space-x-8 mt-4 md:mt-0 text-[30px] p-10">
            <a href="#">

            <FaFacebook />

            </a>
            <a href="#">

            <FaInstagram />

            </a>
            <a href="#">

            <RiTwitterXFill />

            </a>
            <a href="#">
            <FaGithub />

            </a>
            <a href="#">
                
            <FaYoutube />

                
                </a>
        </div>
        <div className="text-center text-gray-500 text-sm p-10 text-[22px]">
        © 2024 Your Company, Inc. All rights reserved.
    </div>
    </div>
  
</footer>;
}