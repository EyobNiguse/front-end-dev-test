import { FaCaretUp } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export interface ProductProps {
  name: string;
  price: number | string;
  marketCap: number | string;
  bgUrl: string | null;
  increment?: string | null;
  decrement?: string | null;
  hasTopCheck: boolean;
  isVerified: boolean;
 
}
const Product: React.FC<ProductProps> = ({
  name,
  price,
  marketCap,
  bgUrl,
  increment,
  decrement,
  isVerified,
  hasTopCheck,
 
}) => {
  return (
    <div
      className={`flex  flex-col  h-full w-full   shadow-lg rounded-[12px]`}
    >
      <div
        style={{
          backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
        }}
        className={`bg-[#c25353] relative  bg-cover bg-center h-full rounded-tr-[12px] rounded-tl-[12px]`}
      >
        {hasTopCheck && (
          <div
            className="absolute top-6 right-6  rounded-full p-0 bg-[#ffffff76]"
            style={{ boxShadow: "0px 0px 19.9px 0px rgba(255, 255, 255, 1)" }}
          >
            {" "}
            <RiVerifiedBadgeFill size="38" color="#2081E2" />{" "}
          </div>
        )}
      </div>
      <div className="flex  justify-between p-4">
        <div>
          <h1 className="text-[20px] text-[rgb(18,18,18)] font-[600] flex items-center space-x-2">
            <span>{name.toUpperCase()}</span>{" "}
            {isVerified && <RiVerifiedBadgeFill color="#2081E2" />}
          </h1>
          <h2 className="text-[13px] mt-3 text-[rgb(84,84,84)]">Price</h2>
          <h3 className="text-[14px]  font-[600]">{price}</h3>
        </div>
        <div>
          <div>
            <h1
              className={`${
                increment != null
                  ? "flex space-x-2 items-center text-[rgb(42,192,47)]"
                  : "hidden"
              }`}
            >
              {" "}
              <FaCaretUp size="20" />
              <span> {increment}</span>
            </h1>
            <h1
              className={`${
                decrement != null
                  ? "flex items-center space-x-2 text-[rgb(231,58,58)]"
                  : "hidden"
              }`}
            >
              {" "}
              <AiOutlineCaretDown size="20" />
              <span> {decrement}</span>
            </h1>
            {decrement == null && increment == null && (
              <h1 className="h-[30px]"> </h1>
            )}
          </div>

          <h2 className="text-[rgb(84,84,84)] mt-3 text-[13px]">Market Cap</h2>
          <h2>{marketCap}</h2>
        </div>
      </div>
    </div>
  );
};
export default Product;
