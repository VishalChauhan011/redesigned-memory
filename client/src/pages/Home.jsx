import React, { useState, useEffect } from "react";

import { useStateContext } from "../context";

import { DisplayCampaigns } from "../components";
import CreateCampaign from "./CreateCampaign";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);


  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) {
      fetchCampaigns();
    }
  }, [address, contract]);



  return (
    <div className="items-center flex flex-col">

      <DisplayCampaigns
        campaigns={campaigns}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;
