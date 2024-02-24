import { Typography } from "@material-tailwind/react";
import FooterData from "../../data/FooterData.json"; 
import "./Footer.css"

const Footer = () => {
  const { footerSection } = FooterData; 
  const { p, socials } = footerSection[0]; 

  return (
    <div>
      <Typography color="white" className="t-24">
        {p}
      </Typography>
      {socials.map((social, index) => (
        <Typography  className="t-21" as="a"  href={social.src} key={index} color="white">
          {social.icon && <img src={social.icon} alt="Icon" />}
          <span>{social.p}</span>
        </Typography>
      ))}
    </div>
  );
};

export default Footer;
