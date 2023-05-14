import React from "react";
import { thirdweb } from "../assets";

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-row items-center w-[317px] bg-transparent border border-black/[0.5] rounded-[10px] ">
      <div className="flex w-[42px] h-[42px] rounded-[21px] bg-black/[0.5] ml-[20px] items-center justify-items-center justify-center ">
        <img
          src={thirdweb}
          alt="user"
          className="w-[60%] h-[60%] object-cover "
        />
      </div>
      <div className="ml-4 my-[16px] ">
        <h4 className="text-black/[0.5] text-[14px] font-semibold ">
          Creator
        </h4>
        <h4 className="text-black font-bold text-[16px]">
          {value.slice(0, 10) + "..."}
        </h4>
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
