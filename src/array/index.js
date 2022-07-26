// Icons
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";

import imgE1 from "../assets/img/imgProject/ecommerce/1.png";
import imgE2 from "../assets/img/imgProject/ecommerce/2.png";
import imgE3 from "../assets/img/imgProject/ecommerce/3.png";
import imgE4 from "../assets/img/imgProject/ecommerce/4.png";
import imgE6 from "../assets/img/imgProject/ecommerce/6.png";
import imgE7 from "../assets/img/imgProject/ecommerce/7.png";

import imgR1 from "../assets/img/imgProject/rick/1Rick.png";
import imgR2 from "../assets/img/imgProject/rick/2Rick.png";
import imgR3 from "../assets/img/imgProject/rick/3Rick.png";
import imgR4 from "../assets/img/imgProject/rick/4Rick.png";
import imgR5 from "../assets/img/imgProject/rick/5Rick.png";
import imgR6 from "../assets/img/imgProject/rick/6Rick.png";

import imgO1 from "../assets/img/imgProject/ong/1alkemy.png";
import imgO2 from "../assets/img/imgProject/ong/2alkemy.png";
import imgO3 from "../assets/img/imgProject/ong/3alkemy.png";
import imgO4 from "../assets/img/imgProject/ong/4alkemy.png";
import imgO5 from "../assets/img/imgProject/ong/5alkemy.png";
import imgO6 from "../assets/img/imgProject/ong/6alkemy.png";
import imgO7 from "../assets/img/imgProject/ong/7alkemy.png";
import imgO8 from "../assets/img/imgProject/ong/8alkemy.png";
import imgO9 from "../assets/img/imgProject/ong/9alkemy.png";
import imgO10 from "../assets/img/imgProject/ong/10alkemy.png";


// Rick and morty React
export const imgR = [
  {
    img: imgR1,
  },
  {
    img: imgR2,
  },
  {
    img: imgR3,
  },
  {
    img: imgR4,
  },
  {
    img: imgR5,
  },
  {
    img: imgR6,
  },
];

// E-commerce
export const imgE = [
  {
    img: imgE1,
  },
  {
    img: imgE2,
  },
  {
    img: imgE3,
  },
  {
    img: imgE4,
  },
  {
    img: imgE6,
  },
  {
    img: imgE7,
  },
];

// ONG ALKEMY
export const imgOng = [
  {
    img: imgO1,
  },
  {
    img: imgO2,
  },
  {
    img: imgO3,
  },
  {
    img: imgO4,
  },
  {
    img: imgO5,
  },
  {
    img: imgO6,
  },
  {
    img: imgO7,
  },
  {
    img: imgO8,
  },
  {
    img: imgO9,
  },
  {
    img: imgO10,
  },
];

// iconos
export const icons = [
  {
    icon: <SiGithub size={30} />,
    text: 'alexiscjscab',
    link: 'https://github.com/alexiscjscab',
  },
  {
    icon: <SiLinkedin size={30} />,
    text: 'alexis-beas-dev',
    link: 'https://www.linkedin.com/in/alexis-beas-dev/',
  },
  {
    icon: <SiGmail size={30} />,
    text: 'alexiscjscab@gmail.com',
    link: 'mailto:alexiscjscab@gmail.com',
  },
];
// items navBar
export const items = [
  {
    id: "about",
    text: "About Me",
    icon: <InfoTwoToneIcon fontSize="large" />,
  },

  {
    id: "skills",
    text: "Skills",
    icon: <EmojiObjectsTwoToneIcon fontSize="large" />,
  },

  {
    id: "work",
    text: "My Work",
    icon: <BuildTwoToneIcon fontSize="large" />,
  },

  {
    id: "contact",
    text: "Contact",
    icon: <ContactMailTwoToneIcon fontSize="large" />,
  },
];