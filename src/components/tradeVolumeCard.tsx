import { GoDotFill } from "react-icons/go";

export default function TradeVolumeCard(){

    return    <div className="bg-gray-100 rounded-[12px] p-[16px] w-full mt-2 ">
          <div className="flex space-x-1 items-center">
            <GoDotFill size="15px" color="green" />
            <h1 className="text-[14px]">Trade Volume</h1>
          </div>
          <div className="flex mt-2 items-center   ">
           
    
            <h1 className="text-[23px] font-[500]">$1,288,314,266</h1>
          </div>
        </div>
}