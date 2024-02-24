import { Typography } from "@material-tailwind/react";
import postImage from "../assets/post.png";
import wspImage from "../assets/wsp.png";
import linkedinImage from "../assets/linkedin.png";
import eqLogoImage from "../assets/EQ_logo.png";

const Footer = ({ data }) => {
  const sections = [
    { key: "mail", icon: "Mail", image: postImage, text: "Mail" },
    { key: "wsp", icon: "WhatsApp", image: wspImage, text: "WhatsApp" },
    { key: "iconIns", icon: "Instagram", text: data.iconLk },
    { key: "iconLk", icon: "LinkedIn", image: linkedinImage, text: data.lk },
    { key: "eqLogo", icon: "Equilibra Contable", image: eqLogoImage, text: "" },
  ];

  return (
    <div>
      <Typography color="white">
        {data.p}
      </Typography>
      {sections.map((section) => (
        <div key={section.key}>
          {section.image && <img src={section.image} alt={section.icon} />}
          <Typography color="white">
            {section.text}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Footer;
