import { Button, Typography } from "@material-tailwind/react";
import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";

export default function BannerSuscripcion() {
  return (
    <Banner className="w-full">
      <div className=" flex w-full justify-between border-b border-white bg-gradient-to-r from-lightGreen to-lightBlue p-2 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <Typography className="text-base pr-2">
              ¡Suscribíte a nuestro newsletter desde aquí!
            </Typography>
            <a
              href="https://us7.list-manage.com/contact-form?u=beee8586e2c51c72912dd8358&form_id=7df19a5b4dd70305c54ae302cab58f95"
              target="_blank"
            >
              <Typography variant="h6" className="flex flex-row items-center">
                Regístrate ahora <HiArrowRight className="h-4 w-4 ml-1" />
              </Typography>
            </a>
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
