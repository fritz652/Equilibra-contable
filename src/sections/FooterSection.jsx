import { Typography } from "@material-tailwind/react";
import Footer from "../Components/footer/Footer";
import FooterData from "../data/FooterData.json";

const FooterSection = () => {
  const { footerSection } = FooterData;

  return (
    <div  className="bg-darkGreen">
      {footerSection.map((section, index) => (
        <div key={index}>
          <Typography
            variant="h3"
            className="text-left text-white text-3xl mb-3 t-36"
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
