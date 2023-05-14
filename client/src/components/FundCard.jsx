import React from "react";

import { thirdweb, tagType } from "../assets";
import { daysLeft } from "../utils";

const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);

  return (
    <div
      className="sm:w-[288px] w-full rounded-[5px] bg-[#F4ECE5]  cursor-pointer  hover:drop-shadow-2xl"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={image}
          alt="fund"
          className="w-full h-[258px] object-cover rounded-b-lg drop-shadow-lg"
        />
        <div className="flex flex-col justify-center items-center absolute top-1 right-1">
          <div className="flex justify-center items-center h-[48px] w-[48px] rounded-[24px]  bg-zinc-400">
            <h4 className="font-epilogue font-bold text-[75%] text-center text-[#fffefe] leading-[10px] p-3 drop-shadow-xl">
              {remainingDays}
            </h4>
          </div>
          <p className="mt-[3px] font-epilogue font-normal text-[10px] leading-[10px] text-[#f2f2f4] sm:max-w-[120px] truncate shadow-slate-700 drop-shadow-xl">
            Days left
          </p>
        </div>
        <div className="absolute left-0 bottom-1 p-3 border-x-indigo-300">
          <h3 className=" font-semibold text-[10px] text-[#5F5F6A] text-left leading-[16px] ">
            {title}
          </h3>
          <h3 className="mt-[10px]  font-normal text-[#5F5F6A] text-left leading-[20px] truncate">
            {description.slice(0, 30)}
          </h3>
        </div>
      </div>

      <div className="flex  p-4 border-x border-b rounded-b-lg border-[#cdc7c7] gap-[15px]">
        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#000000] leading-[22px] ">
              Collected: {amountCollected}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#5F5F6A] sm:max-w-[120px] truncate ">
              Target {target}
            </p>
          </div>
        </div>

        <div className="flex  items-center m-[10px] gap-[10px] ">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a] ">
            <img
              src={thirdweb}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[10px] text-[#5F5F6A] truncate ">
            by <span className="text-[#5F5F6A] ">{owner.slice(0, 10)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
