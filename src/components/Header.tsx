import { MdOutlineMenu } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { CiDesktop } from "react-icons/ci";

export default function Header() {
  return (
    <div className="block h-[15vh]">
      <header className="w-full flex justify-between items-baseline h-[45px] pt-[10px] pr-[16px] pb-[10px] pl-[16px]">
        <div className="md:hidden cursor-pointer">
          <MdOutlineMenu size="34px" />
        </div>
        <div className="md:w-[368px] w-[fit-content]  md:mx-0 mx-auto">
          <img src="/Link.png" className="h-[32px]" alt="" />
        </div>

        <div className="hidden md:flex relative items-center justify-between w-[350px] h-[40px]  rounded-[9999px] shadow-sm  bg-[#f2f2f2]  pr-[16px] pl-[16px] border-2 border-[rgba(229, 229, 229, 1)] text-[rgba(0, 0, 0, 0.05)]  ">
          <img src="/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search Agents"
            className="border-none bg-transparent focus:border-none"
          />
          <img src="/Keyboard.svg" alt="" />
        </div>
        <div className="hidden md:block w-[281px] h-[64px]">
          <div className="w-[fit-content] h-[64px] left-[127px] p-2 pl-1 gap-0 flex items-center space-x-2 flex-row ">
            <a href="">
              <FaTwitter size="24" />
            </a>
            <a href="">
              <FaTelegram size="24" />
            </a>
            <a href="">
              <CiDesktop size="36" />
            </a>

            <button className="bg-black text-white h-[48px] pr-[24px] pl-[24px] rounded-[4px]">
              Start Buying
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
