import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function Cards({ title, description, img }) {
  return (
    <Card
      shadow={false}
      className="w-full max-w-[32rem] h-[32rem] bg-lightGreen justify-around shadow-2xl"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-6 pt-0 pb-6 mt-8"
      >
        <img
          className="h-max-[6.25rem] max-w-[6.25rem] rounded-full object-cover object-center ml-6"
          src={img}
          alt="img cards servicios"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography
              variant="h4"
              color="white"
              className="font-Montserrat-Bold text-3xl"
            >
              {title}
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="mb-12 p-0 mx-10 flex flex-col justify-between">
        <Typography
          color="black"
          variant="paragraph"
          className="font-Montserrat-Regular text-xl"
        >
          {description}
        </Typography>
        <Button
          ripple={true}
          fullWidth={false}
          className="mt-8 bg-darkGreen w-auto mx-auto"
        >
          <Typography
            variant="h6"
            color="white"
            className="font-Montserrat-SemiBold"
          >
            Consultar
          </Typography>
        </Button>
      </CardBody>
    </Card>
  );
}

//427 x 458

export default Cards;
