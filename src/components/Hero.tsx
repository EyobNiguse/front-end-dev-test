import Product from "./product";
import UsersList from "./TotalUsersCard";
import TradeVolumeCard from "./tradeVolumeCard";

export default function Hero(){
    return <div className="w-[100%] mx-auto grid md:grid-cols-[60%,40%] gap-8 grid-cols-1 md:mt-6 p-4 space-y-10">
<div className="bg-white w-full  md:h-[430px]  flex flex-col justify-center ">

    <h1 className="md:text-[60px] text-[40px] font-[700] md:text-left text-center">Buy Memes.</h1>
    <h1  className="md:text-[60px] text-[40px] font-[700] md:text-left text-center"> In Two Clicks.</h1>
    <p className="md:text-[23px] text-[13px] text-[rgba(10, 10, 10, 1)] md:text-left text-center">The fastest way to buy memes in just two clicks.</p>
    <p className="md:text-[23px] text-[13px] text-[rgba(10, 10, 10, 1)] md:text-left text-center">Under 1 minute to sign up and no wallet needed.</p>
    <div className="hidden md:flex space-x-2  ">
    <UsersList/>
    <TradeVolumeCard/>
    </div>

</div>
<div className="flex items-center justify-start  h-[350px]  ">
    <div className="h-full md:w-[85%] w-full">
    <Product name={"virtual"} price={"250"} marketCap={"250"} bgUrl={null} increment={"100%"}   hasTopCheck={true} isVerified={true}  />
    </div>
</div>
    </div>
}