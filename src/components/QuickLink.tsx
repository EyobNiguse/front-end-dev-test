export interface LinkProps {
    title: string; 
  }
  const QuickLink: React.FC<LinkProps> = ({title})=>{
return <div className="w-[300px] h-[84px] flex items-center justify-center text-white bg-[url('/bgLink.png')] bg-center bg-cover rounded-[12px]">
    <h1 className=" text-[20px] font-[700] p-2">{title}</h1>
</div>;
  };
export default QuickLink;