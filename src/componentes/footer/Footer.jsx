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
        <Typography  className="py-2 px-10 text-left t-14 mx-20 d-flex " /* as="a"  href={social.href} */ target="_blank" key={index} color="white">
          {social.icon && <a  href={social.href} target="_blank"><img className="iconFooter" src={social.icon} alt="Icon" /></a>}
          <div>
            <a href={social.href} target="_blank">{social.p}</a>
            <a href={social.href2} target="_blank">{social.p2}</a>
          </div>
        </Typography>
      ))}
    </div>
  );
};

export default Footer;
