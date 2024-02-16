import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function Cards() {
  return (
    <Card shadow={false} className="w-full max-w-[26.688rem] bg-lightGreen ">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-6 pt-0 pb-6 mt-8"
      >
        <img
          className="h-max-[6.25rem] max-w-[6.25rem] rounded-full object-cover object-center ml-6"
          src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1708124276/Equilibra-Contable/monotributo_kf1gbf.png"
          alt="monotributo imagen"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h4" color="white">
              Monotributo
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="mb-8 p-0 ml-6 mr-6 flex flex-col">
        <Typography color="black" variant="paragraph">
          Sos Monotributista y queres profesionalizar tu negocio teniendo
          seguimiento, estrategia fiscal y asesoría mensual.
        </Typography>
        <Button
          ripple={true}
          fullWidth={false}
          className="mt-6 bg-darkGreen w-auto mx-auto"
        >
          <Typography variant="h6">Consultar</Typography>
        </Button>
      </CardBody>
    </Card>
  );
}

//427 x 458

export default Cards;
