import { Typography } from "@material-tailwind/react";
import FooterData from "../../data/FooterData.json"; 
import "./Footer.css"

const Footer = () => {
  const { footerSection } = FooterData; 
  const { p, socials } = footerSection[0]; 

  return (
    <div className="d-grid">
      <Typography color="white"  className="px-12 text-left mx-10 t-16" variant="lead"
            >
        {p}
      </Typography>
      {socials.map((social, index) => (
        <Typography  className="py-2 px-10 text-left t-14 mx-20 d-flex " as="a"  href={social.href} key={index} color="white">
          {social.icon && <img className="iconFooter" src={social.icon} alt="Icon" />}
          <span>{social.p}</span>
        </Typography>
      ))}
    </div>
  );
};

export default Footer;
