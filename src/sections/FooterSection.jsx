import { Typography } from "@material-tailwind/react";
import Footer from "../componentes/footer/Footer";
import FooterData from "../data/FooterData.json";

const FooterSection = () => {
  const { footerSection } = FooterData;

  return (
    <div id="comunicacion" className="footer bg-darkGreen">
      {footerSection.map((section, index) => (
        <div key={index}>
          <Typography
            variant="h3"
            className="text-left text-white px-12 mx-10 t-20"
          >
            {section.title}
          </Typography>
          <Footer data={section} />
        </div>
      ))}
    </div>
  );
};

export default FooterSection;
