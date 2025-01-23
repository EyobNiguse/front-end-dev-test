import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-white flex flex-col">
            <div className="flex flex-col justify-around md:justify-between md:items-center md:p-10">
                <div className="flex flex-wrap justify-between space-x-4 p-8  space-y-6 md:space-y-0 md:p-10 text-[20px] md:text-[23px]">
                    <a href="#" className="text-gray-600 hover:text-blue-500 md:mr-4">About</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 md:mr-4">Blog</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 md:mr-4">Jobs</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 md:mr-4">Press</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 md:mr-4">Accessibility</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 md:mr-4">Partners</a>
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
        </footer>
    );
};

export default Footer;