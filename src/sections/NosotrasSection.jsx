import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const NosotrasSection = () => {
  //   const isSmallScreen = useMediaQuery("(max-width: 870px)");

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="nosotras">
      <Card
        className={`${isSmallScreen ? "flex-col" : "flex-row"} rounded-none`}
        style={{ height: isSmallScreen ? "auto" : "600px" }}
      >
        {!isSmallScreen ? (
          <>
            <CardHeader
              shadow={false}
              floated={false}
              className={`${
                isSmallScreen ? "w-auto max-h-[600px]" : "w-1/2"
              } rounded-none shrink-0 m-0`}
            >
              <img
                src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1709236558/Equilibra-Contable/nosotras.png"
                alt="card-image"
                className="w-full object-cover h-full"
              />
            </CardHeader>
            <CardBody className="ml-5 justify-center">
              <Typography
                variant="h3"
                className="text-darkBlue text-4xl mb-4 mt-3"
              >
                Nosotras
              </Typography>
              <Typography
                variant="lead"
                className="text-darkBlue text-2xl mb-4"
              >
                Para que nos conozcas un poquito más te vamos a contar acerca de
                nosotras... Somos Tatiana Tojeiro y Silvana Mendez, ambas
                Contadoras Públicas recibidas de la UBA, donde además de
                estudiar, nos conocimos.
              </Typography>
              <Typography variant="lead" className="text-darkBlue text-2xl">
                Nos dicen Tati y Sil y este proyecto inició como una idea allá
                por el 2017 en una clase de impuestos, nos miramos y dijimos
                tenemos que hacer que sea más fácil para el contribuyente. Poco
                a poco fuimos abriendo camino y hace unos 3 años materializamos
                este sueño creando Equilibra Contable.
              </Typography>
              <Typography variant="h5" className="text-darkBlue my-5 text-2xl">
                ¿Te preguntarás porqué elegirnos? 
              </Typography>
              <Typography variant="lead" className="text-darkBlue text-2xl">
                Gracias a nuestro trabajo, experiencia y trayectoria, estamos
                seguras de que podemos acercate la tranquilidad y seguridad
                impositiva que tu proyecto necesita. Hoy acompañamos a
                emprendimientos y empresas en su crecimiento,
                generando solvencia y durabilidad en su desarrollo y su
                economía.
              </Typography>
              <Typography variant="h5" className="text-darkBlue my-4 text-2xl">
                Estamos matriculadas en CABA y PBA: 
              </Typography>
              <div className="mt-8">
                <Typography
                  variant="h6"
                  className=" text-darkBlue text-2xl mb-5"
                >
                  Tatiana Tojeiro 
                  <Typography variant="lead" className="text-2xl">
                    CPCECABA CP T434 F134 UBA
                  </Typography>
                  <Typography variant="lead" className="text-2xl">
                    CPCEPBA T179 F237 Legajo 46703/1
                  </Typography>
                </Typography>
                <Typography variant="h6" className=" text-darkBlue text-2xl">
                  Silvana Mendez
                  <Typography variant="lead" className="text-2xl">
                    CPCECABA CP T443 F140 UBA
                  </Typography>
                </Typography>
              </div>
            </CardBody>
          </>
        ) : (
          <>
            <CardBody className="ml-5 justify-center">
              <Typography
                variant="h3"
                className="text-darkBlue text-4xl mb-4 mt-3 text-center"
              >
                Nosotras
              </Typography>
              <Typography
                variant="lead"
                className="text-darkBlue text-2xl mb-4"
              >
                Para que nos conozcas un poquito más te vamos a contar acerca de
                nosotras... Somos Tatiana Tojeiro y Silvana Mendez, ambas
                Contadoras Públicas recibidas de la UBA, donde además de
                estudiar, nos conocimos.
              </Typography>
              <Typography variant="lead" className="text-darkBlue text-2xl">
                Nos dicen Tati y Sil y este proyecto inició como una idea allá
                por el 2017 en una clase de impuestos, nos miramos y dijimos
                tenemos que hacer que sea más fácil para el contribuyente. Poco
                a poco fuimos abriendo camino y hace unos 3 años materializamos
                este sueño creando Equilibra Contable.
              </Typography>
              <Typography variant="h5" className="text-darkBlue my-5 text-2xl">
                ¿Te preguntarás porqué elegirnos? 
              </Typography>
              <Typography variant="lead" className="text-darkBlue text-2xl">
                Gracias a nuestro trabajo, experiencia y trayectoria, estamos
                seguras de que podemos acercate la tranquilidad y seguridad
                impositiva que tu proyecto necesita. Hoy acompañamos a
                emprendimientos y empresas en su crecimiento,
                generando solvencia y durabilidad en su desarrollo y su
                economía.
              </Typography>
              <Typography variant="h5" className="text-darkBlue my-4 text-2xl">
                Estamos matriculadas en CABA y PBA: 
              </Typography>
              <div className="mt-8">
                <Typography
                  variant="h6"
                  className=" text-darkBlue text-2xl mb-5"
                >
                  Tatiana Tojeiro 
                  <Typography variant="lead" className="text-2xl">
                    CPCECABA CP T434 F134 UBA
                  </Typography>
                  <Typography variant="lead" className="text-2xl">
                    CPCEPBA T179 F237 Legajo 46703/1
                  </Typography>
                </Typography>
                <Typography variant="h6" className=" text-darkBlue text-2xl">
                  Silvana Mendez
                  <Typography variant="lead" className="text-2xl">
                    CPCECABA CP T443 F140 UBA
                  </Typography>
                </Typography>
              </div>
            </CardBody>
            <CardHeader
              shadow={false}
              floated={false}
              className={`${
                isSmallScreen ? "w-auto max-h-[600px]" : "w-1/2"
              } rounded-none shrink-0 m-0`}
            >
              <img
                src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1709236558/Equilibra-Contable/nosotras.png"
                alt="card-image"
                className="w-full object-cover h-full"
              />
            </CardHeader>
          </>
        )}
      </Card>
    </div>
  );
};

export default NosotrasSection;
