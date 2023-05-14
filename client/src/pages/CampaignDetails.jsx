import React, { useState, useEffect } from "react";
import { Popup } from "reactjs-popup";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { CircularProgressbar } from "react-circular-progressbar";

import { useStateContext } from "../context";
import { CustomButton, CountBox, Loader } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb, supporters, globe } from "../assets";
import { sharelinks } from "../constants";
import { FormField } from "../components";

const Icon = ({ name, link, imgUrl, handleClick }) => {
  return (
    <div
      className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-[#F4ECE5] ml-5 cursor-pointer "
      onClick={handleClick}
    >
      <img src={imgUrl} alt={name} />
    </div>
  );
};

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();
  console.log(state);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);
  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);
    await donate(state.pId, amount);
    navigate("/");
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px] ">
        <div className="flex-10 flex-col">
          <img
            src={state.image}
            alt="campaign"
            className="w-[739px] h-[410px] object-cover drop-shadow-lg rounded-xl "
          />
          {/* <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2 ">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div> */}
          <div className="flex flex-row mt-5">
            <h3 className="text-[24px] font-bold text-black ">Share now:</h3>
            {sharelinks.map((link) => (
              <Icon name={link.name} link={link.link} imgUrl={link.imgUrl} />
            ))}
          </div>
          <h3 className="text-[20px] text-black/[0.5] font-semibold mt-2 mb-[28px] ">
            Every share can bring something
          </h3>

          <div className="flex flex-row justify-between">
            <CountBox title="Gurgaon, India" value={state.owner} />
          </div>
          <div className="w-[739px] h-[410px] drop-shadow-lg rounded-xl bg-white mt-4">
            <div className="border-b-2 border-black w-[739px] h-[90px] text-black flex gap-8">
              <div className="p-5 font-bold from-neutral-950 to-gray-600 flex items-center justify-center gap-3">
                <img src={globe} alt="globe" />
                <h3>Details</h3>
              </div>
              <div className="p-5 font-bold from-neutral-950 to-gray-600 flex items-center justify-center gap-3">
                <img src={globe} alt="globe" />
                <h3>Updates</h3>
              </div>
            </div>
            <div className="w-[739px] h-[410px] text-black p-7">
              <h1>
               {state.description}
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[468px] h-[871px] flex flex-col p-4 bg-[#FFFFFF] drop-shadow-lg rounded-[10px] ">
          <div className="flex flex-row w-full items-center justify-evenly mt-[38px] ">
            <div className="h-[120px] w-[120px] rounded-[55px]  ">
              <CircularProgressbar
                className="flex "
                value={calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}
                text={`${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`}
                styles={{
                  pathTransitionDuration: 0.5,
                  path: {
                    stroke: "#4acd8d",
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",
                    // Customize transition animation
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    // Rotate the path
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#3a3a43",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "start",
                  },
                }}
                strokeWidth={5}
              />
            </div>
            <div className="flex-col items-center text-center">
              <h3 className="text-[24px] font-bold text-black">{`${state.amountCollected} ETH`}</h3>
              <h3 className="text-[20px] font-bold text-black/[0.5] ">{`Raised of ${state.target}`}</h3>
            </div>
          </div>

          <div className="flex flex-row w-full items-center justify-evenly mt-[30px]">
            <div className="flex-col text-center">
              <h3 className="text-[24px] font-bold text-black/[0.5] ">{`${donators.length}`}</h3>
              <h3 className="text-[20px] font-bold text-black/[0.5] ">
                Supporters
              </h3>
            </div>
            <div className=" flex-col text-center">
              <h3 className="text-[24px] font-bold text-black/[0.5] ">{`${remainingDays}`}</h3>
              <h3 className="text-[20px] font-bold text-black/[0.5] ">
                Days Left
              </h3>
            </div>
          </div>

          <div className="flex w-full items-center justify-center mt-[52px] ">
            <Popup
              trigger={
                <button className="w-[354px] h-[65px] bg-[#3661EB] font-bold rounded-[10px] text-[24px] ">
                  {" "}
                  Contribute{" "}
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="w-[600px]  bg-white rounded-[10px] drop-shadow-2xl flex flex-col items-center ">
                  <h3 className="font-bold text-black text-[24px] my-8 ">
                    Add a Donation Amount
                  </h3>
                  <input
                    type="number"
                    placeholder="ETH 0.1"
                    step="0.01"
                    className="w-[502px] py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-black/[0.5] bg-transparent font-epilogue text-black text-[18px] leading-[30px] placeholder:text-black/[0.5] placeholder:font-bold rounded-[10px] "
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="flex w-full justify-center mt-8 mb-12">
                    <CustomButton
                      btnType="button"
                      title="Contribute"
                      styles="w-[65%] bg-[#3661EB]"
                      handleClick={handleDonate}
                    />
                  </div>
                </div>
              )}
            </Popup>

            {/* <CustomButton
              btnType="button"
              title="Contribute"
              styles="w-[65%] bg-[#3661EB]"
              handleClick={handleDonate}
            /> */}
          </div>

          <hr className="mt-[38px] mb-[21px]" />

          <div className="w-full items-center justify-center flex flex-row ">
            <div className="w-[36px] h-[36px] ">
              <img src={supporters} className="object-contain" />
            </div>
            <h3 className="text-[24px] ml-4 font-bold text-black/[0.5]  ">
              Donators
            </h3>
          </div>

          <div className="w-full h-full mt-[20px] justify-items-start flex flex-col gap-4 ">
            {donators.length > 0 ? (
              donators.map((item, index) => (
                <>
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex flex-row justify-items-start items-center"
                  >
                    <div className="w-[48px] h-[48px] bg-black/[0.5] rounded-[24px] mr-4 "></div>
                    <div className="flex flex-col  justify-center">
                      <p className="w-full font-epilogue  font-bold text-[18px] text-[#000000] leading-[26px] truncate">
                        {item.donator.slice(0, 20) + "..."}
                      </p>
                      <p className="font-epilogue font-bold text-[16px] text-[#808191] leading-[26px] ">
                        {item.donation}
                      </p>
                    </div>
                  </div>
                  <hr />
                </>
              ))
            ) : (
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify ">
                No donators yet. Be the first one!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
