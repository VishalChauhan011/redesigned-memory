import React from "react";

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-row items-center w-[317px] bg-transparent border border-black/[0.5] rounded-[10px] ">

      <div className="w-[42px] h-[42px] rounded-[21px] bg-black/[0.5] ml-[20px] "></div>
      <div className="ml-4 my-[16px] ">
        <h4 className="text-black/[0.5] text-[14px] font-semibold ">Campaigner</h4>
        <h4 className="text-black font-bold text-[16px] ">{value}</h4>
        <h4 className="text-black/[0.5] text-[14px] font-semibold ">{title}</h4>
      </div>
      {/* <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-[#1c1c24] rounded-t-[10px] w-full text-center truncate ">
        {value}
      </h4>
      <p className="font-epilogue font-normal text-[16px] text-[#808191] bg-[#28282e] px-3 py-2 w-full rounded-b-[10px] text-center ">
        {title}
      </p> */}
    </div>
  );
};

export default CountBox;
