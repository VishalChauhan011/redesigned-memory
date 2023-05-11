import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar, Navbar } from "./components";
import { search } from "./assets";
import { Home, Profile, CreateCampaign, CampaignDetails } from "./pages";

const App = () => {

 

  return (
    <div className="relative sm:-8 bg-[#F4ECE5] min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="w-[450px] text-center">
        <p className="text-[#000000] text-[40px] font-bold ">
          Create your campaign by connecting your wallet
        </p>
      </div>

      {/* searchbar */}
      <div className="flex flex-row w-[458px] my-10 pl-4 h-[52px] bg-transparent border border-[#0A1020] rounded-[10px]">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full  font-epilogue font-normal text-[14px] placeholder:text-[#363A43] text-[#000000] bg-transparent outline-none"
        />

        <div className="w-[72px] h-full  bg-[#0A1020] flex justify-center rounded-r-lg  items-center cursor-pointer">
          <img
            src={search}
            alt="search"
            className="w-[20px] h-[20px] object-contain"
          />
        </div>
      </div>
      

      <div className="sm:flex hidden mr-10 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

{
  /*  */
}
