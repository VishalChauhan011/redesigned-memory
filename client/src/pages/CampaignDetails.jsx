import React, { useState, useEffect } from "react";
import { Popup } from "reactjs-popup";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { CustomButton, CountBox, Loader } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb, supporters } from "../assets";
import { sharelinks } from "../constants";
import { FormField } from "../components";

const Icon = ({ name, link, imgUrl, handleClick }) => {
  return (
    <div
      className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-[#F2F2F2] ml-5 cursor-pointer "
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
            className="w-[739px] h-[410px] object-cover rounded-xl "
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
          <h3 className="text-[20px] text-black/[0.5] font-semibold mt-2 ">
            Every share can bring something
          </h3>
        </div>

        <div className="w-[468px] h-[871px] flex flex-col p-4 bg-[#FFFFFF] rounded-[10px] ">
          <div className="flex flex-row w-full items-center justify-evenly mt-[38px] ">
            <div className="h-[110px] w-[110px] rounded-[55px] bg-black "></div>
            <div className="flex-col">
              <h3 className="text-[24px] font-bold text-black">{`${state.amountCollected} ETH`}</h3>
              <h3 className="text-[20px] font-bold text-black/[0.5] ">{`Raised of ${state.target}`}</h3>
            </div>
          </div>

          <div className="flex flex-row w-full items-center justify-evenly mt-[30px]">
            <div className="flex-col justify-center ">
              <h3 className="text-[24px] font-bold text-black/[0.5] ">{`${donators.length}`}</h3>
              <h3 className="text-[20px] font-bold text-black/[0.5] ">
                Supporters
              </h3>
            </div>
            <div className="flex-col">
              <h3 className="text-[24px] font-bold text-black/[0.5] ">{`${remainingDays}`}</h3>
              <h3 className="text-[20px] font-bold text-black/[0.5] ">
                Days Left
              </h3>
            </div>
          </div>

          <div className="w-full items-center justify-center mt-[52px] ">
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
                <div className="w-[600px] h-[550px] bg-white rounded-[10px] drop-shadow-2xl flex flex-col items-center ">
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
                  <div className="w-[150px] ">
                    <FormField
                      labelName="Your Name *"
                      inputType="text"
                      className="text-[#0000000] "
                      handleChange={(e) => handleFormFieldChange("name", e)}
                    />
                  </div>
                  <div className="w-full justify-center">
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
              Supporters
            </h3>
          </div>

          {/* <p className="font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#808191] ">
            Fund the campaign
          </p>
          <div className="mt-[30px]">
            <input
              type="number"
              placeholder="ETH 0.1"
              step="0.01"
              className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px] "
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px] ">
              <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white ">
                Back it because you believe in it.
              </h4>
              <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191] ">
                Support the project for no reward, just because it speaks to
                you.
              </p>
            </div>

            <CustomButton
              btnType="button"
              title="Fund Campaign"
              styles="w-full bg-[#8c6dfd]"
              handleClick={handleDonate}
            />
          </div> */}
        </div>

        {/* <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px] ">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox
            title={`Raised of ${state.target}`}
            value={state.amountCollected}
          />
          <CountBox title="Total Backers" value={donators.length} />
        </div> */}
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5 ">
        <div className="flex-2 flex flex-col gap-[40px] ">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[#000000] uppercase">
              Creator
            </h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px] ">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer ">
                <img
                  src={thirdweb}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain "
                />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-[#000000] break-all ">
                  {state.owner}
                </h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191] ">
                  10 Campaigns
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[#000000] uppercase">
              Story
            </h4>
            <div className="mt-[20px]  ">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify ">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[#000000] uppercase">
              Donators
            </h4>
            <div className="mt-[20px] flex flex-col gap-4 ">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex justify-between items-center gap-4"
                  >
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll ">
                      {index + 1}. {item.donator}
                    </p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll ">
                      {item.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify ">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] text-[#000000] uppercase">
            Fund
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
