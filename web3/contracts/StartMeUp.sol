// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract StartMeUp {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaign = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaign];
        require(
            campaign.deadline < block.timestamp,
            "The deadline should be a date in the future."
        );
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.image = _image;
        campaign.amountCollected = 0;
        numberOfCampaign++;
        return numberOfCampaign - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;
        Campaign storage campaign = campaigns[_id];
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        (bool sent, ) = payable(campaign.owner).call{value: amount}("");
        if (sent) {
            campaign.amountCollected += amount;
        }
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaign);

        for (uint i = 0; i < numberOfCampaign; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}
