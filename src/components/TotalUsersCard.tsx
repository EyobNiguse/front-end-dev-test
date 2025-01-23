import { GoDotFill } from "react-icons/go";

export default function UsersList() {
  return (
    <div className="bg-gray-100 rounded-[12px] p-[16px]  mt-2  w-full">
      <div className="flex space-x-2 items-center">
        <GoDotFill size="15px" color="green" />
        <h1 className="text-[14px]">Total users</h1>
      </div>
      <div className="flex mt-2 items-center space-x-2 ">
        <div className="flex ">
          <div className="border-4 border-black rounded-full w-[35px] h-[35px]  bg-[url('/0.jpeg')] bg-cover bg-center"></div>
          <div className="border-4 border-black rounded-full w-[35px] h-[35px] -ml-2 bg-[url('/1.jpeg')] bg-cover bg-center"></div>
          <div className="border-4 border-black rounded-full w-[35px] h-[35px] -ml-2 bg-[url('/2.jpeg')] bg-cover bg-center"></div>
        </div>

        <h1 className="text-[23px] font-[500]">52,630</h1>
      </div>
    </div>
  );
}
