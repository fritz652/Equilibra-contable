import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { useState } from "react";

export function Form() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY_IRINA);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setResult("Mensaje enviado exitosamente");
        setLoading(false);
      } else {
        console.log("Error", res);
        setResult("No se pudo enviar el mensaje");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setResult("Hubo un problema al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      className="text-gray-600 body-font relative bg-darkBlue"
      id="contacto"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <Typography
            as="h1"
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
          >
            Contacto
          </Typography>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2" onSubmit={onSubmit}>
            <div className="p-2 w-1/2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre y apellido*"
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Asunto"
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 rounded-2xl-2xl transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Escribí tu mensaje aquí..."
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
            </div>
            <Typography>
              <Switch
                label="Recibir newsletter"
                color="blue"
                defaultChecked
                style={{ color: "red" }}
              />
            </Typography>
            <div className="p-2 w-full flex justify-end">
              <Button
                type="submit"
                className="flex text-white bg-lightGreen border-0 py-2 px-8 focus:outline-none rounded-2xl text-lg w-1/2 text-center shadow"
                loading={loading ? true : false}
              >
                <span className="w-full text-center">Enviar</span>
              </Button>
            </div>
            <input type="checkbox" name="botcheck" className="hidden"></input>
          </form>
          <Typography className="text-white">{result}</Typography>
        </div>
      </div>
    </section>
  );
}
