import FooterData from "../../data/FooterData.json"; 
import "./ButtonWspSection.css"

const ButtonWspSection = () => {
   const {wsSection } = FooterData;
   const {href} = wsSection[0];
  return (
    <a href={href} className="btn-wsp" target="_blank">
      <i className="fa fa-whatsapp icono"></i>
    </a>
  )
}

export default ButtonWspSection
