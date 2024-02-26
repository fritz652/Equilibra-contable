import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import logo from "./assets/logo-navbar.svg";
import hero from "./assets/hero-image.jpg";
import logohero from "./assets/logo-hero.svg";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const navList = (
    <nav>
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal text-base lg:text-lg"
        >
          <a
            href="#inicio"
            className="flex items-center"
            onClick={() => handleClick("inicio")}
          >
            Inicio
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal text-base lg:text-lg"
        >
          <a
            href="#servicios"
            className="flex items-center"
            onClick={() => handleClick("servicios")}
          >
            Servicios
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal text-base lg:text-lg"
        >
          <a
            href="#contacto"
            className="flex items-center"
            onClick={() => handleClick("contacto")}
          >
            Contacto
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal text-base lg:text-lg"
        >
          <a
            href="#nosotras"
            className="flex items-center"
            onClick={() => handleClick("nosotras")}
          >
            Nosotras
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal text-base lg:text-lg"
        >
          <a
            href="#comunicacion"
            className="flex items-center"
            onClick={() => handleClick("comunicacion")}
          >
            Comunicación
          </a>
        </Typography>
      </ul>
    </nav>
  );

  return (
    <div className="h-full w-[calc(100%)] ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-4 lg:py6">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} alt="Equilibra Contable" className="mx-8" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
      <div id="inicio">
        <div
          className="w-full h-screen relative bg-cover bg-no-repeat "
          style={{ height: "600px" }}
        >
          <img
            src={hero}
            className="w-full h-full absolute inset-0 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center">
              <img
                className="h-auto max-w-full md:max-w-1/2 lg:max-w-1/3"
                src={logohero}
              />
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-white">
          <Typography
            variant="lead"
            className="py-20 px-10 text-center text-xl"
          >
            Somos un equipo de contadoras profesionales, que acompaña y
            asesora a emprendedores, empresas y profesionales que buscan
            el crecimiento equilibrado de sus proyectos y la tranquilidad
            impositiva durante el proceso.
          </Typography>
        </div>
        <hr className="border-darkGreen max-w-md sm:max-w-[90%] mx-auto mb-5 border" />
      </div>
    </div>
  );
}
