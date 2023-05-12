import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
  twitter,
  instagram,
  whatsapp,
  facebook,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },
  {
    name: "withdraw",
    imgUrl: withdraw,
    link: "/",
    disabled: true,
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
  },
];

export const sharelinks = [
  {
    name: "twitter",
    imgUrl: twitter,
    link: "https://twitter.com/intent/tweet?text=",
  },
  {
    name: "instagram",
    imgUrl: instagram,
    link: "https://www.instagram.com/",
  },
  {
    name: "whatsapp",
    imgUrl: whatsapp,
    link: "https://api.whatsapp.com/send?text=",
  },
  {
    name: "facebook",
    imgUrl: facebook,
    link: "https://www.facebook.com/sharer/sharer.php?u=",
  },
];
