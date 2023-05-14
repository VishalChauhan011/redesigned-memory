import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar, Navbar } from "./components";
import { search } from "./assets";
import { Home, Profile, CreateCampaign, CampaignDetails } from "./pages";
import SimpleReactFooter from "simple-react-footer";

const App = () => {



  return (
    <div className="relative sm:-8 bg-[#F4ECE5] min-h-screen flex flex-col items-center">
      <Navbar />
      {/* <div className="w-[450px] text-center">
        <p className="text-[#000000] text-[40px] font-bold ">
          Create your campaign by connecting your wallet
        </p>
      </div> */}

      {/* searchbar */}
     


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

      <footer className="w-full h-[367px] mt-[100px] bg-gray-900 py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-300 text-sm">
          © 2023 Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  );
};

export default App;

