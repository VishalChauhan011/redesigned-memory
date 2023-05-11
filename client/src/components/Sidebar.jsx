import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { logo, sun } from "../assets";
// import { navlinks } from "../constants";
// import { useStateContext } from "../context";
// const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => {
//   const { disconnect } = useStateContext();

//   if (name === "logout") handleClick = disconnect;
//   return (
//     <div
//       className={`w-[48px] h-[48px] rounded-[10px] ${
//         isActive && isActive === name && "bg-[#2c2f32]"
//       } flex justify-center items-center ${
//         !disabled && "cursor-pointer"
//       } ${styles} `}
//       onClick={handleClick}
//     >
//       {!isActive ? (
//         <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
//       ) : (
//         <img
//           src={imgUrl}
//           alt="fund_logo"
//           className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
//         />
//       )}
//     </div>
//   );
// };

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  const [isCampaignToggle, setIsCampaignToggle] = useState(true);

  const handleCampaignToggle = (page) => {
    setIsCampaignToggle(true);
    navigate("/");
  };

  const handleCreateCampaignToggle = (page) => {
    setIsCampaignToggle(false);
    navigate("/create-campaign");
  };

  return (
    <div className="w-[802px] h-[52px] border border-black/[0.5] rounded-[10px] mb-10 ">
      <button
        className={`w-[50%] h-full rounded-l-lg ${
          isCampaignToggle
            ? "bg-[#0A1020] text-white"
            : "bg-[#F4ECE5] text-black"
        }`}
        onClick={handleCampaignToggle}
      >
        Campaign
      </button>
      <button
        className={`w-[50%] h-full rounded-r-lg ${
          !isCampaignToggle
            ? "bg-[#0A1020] text-white"
            : "bg-[#F4ECE5] text-black"
        } `}
        onClick={handleCreateCampaignToggle}
      >
        Create Campaign
      </button>
    </div>
  );
};

export default Sidebar;

{
  /* <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh] ">
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <div>
          <Icon styles="bg-[#1c1c24] shadow-secondary " imgUrl={sun} />
        </div>
      </div>
    </div> */
}
