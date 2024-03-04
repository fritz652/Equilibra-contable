import React, { useState } from "react";
import Swal from "sweetalert2";
import { Typography } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import "./Fromulario.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [subject, setSubject] = useState("");
  const [errores, setErrores] = useState({});

  const validarEmail = (email) => {
    // Expresión regular para validar el formato de un correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

  const validarNombre = (nombre) => {
    // Expresión regular para validar el formato del nombre
    const regexNombre = /^[a-zA-Z\s]+$/;
    return regexNombre.test(nombre);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let erroresActuales = {};

    // Validación del nombre
    if (nombre.trim() === "" || !validarNombre(nombre)) {
      erroresActuales.nombre =
        "El nombre es requerido y solo puede contener letras y espacios";
    }

    // Validación del email
    if (!validarEmail(email)) {
      erroresActuales.email = "El email no es válido";
    }

    // Validacion del Asunto
    if (subject.trim() === "") {
      erroresActuales.subject = "El asunto es requerido";
    }

    // Validación del mensaje
    if (mensaje.trim() === "") {
      erroresActuales.mensaje = "El mensaje es requerido";
    } else if (mensaje.length > 200) {
      erroresActuales.mensaje =
        "El mensaje no puede tener más de 200 caracteres";
    }

    // Si hay errores, no se envía el formulario
    if (Object.keys(erroresActuales).length > 0) {
      setErrores(erroresActuales);
      return;
    }

    // Envío de datos a través de correo electrónico (simulado)
    const datos = {
      nombre,
      email,
      mensaje,
    };

    // Aquí se podría escribir el código para enviar los datos a través de un servicio de correo electrónico, no está implementado pero se vería con backend.

    // Limpiar el formulario después del envío exitoso
    setNombre("");
    setEmail("");
    setMensaje("");
    setErrores({});

    // SweetAlert
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado",
      text: "Tu mensaje ha sido enviado correctamente",
    });
  };

  return (
    <section
      className="text-gray-600 body-font relative bg-darkBlue"
      id="contacto"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <Typography
            variant="h3"
            className="sm:text-4xl text-3xl title-font mb-4 text-white"
          >
            Contacto
          </Typography>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            className=" flex flex-wrap -m-2"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="p-3 w-1/2">
              <div className="relative">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre y apellido"
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                {errores.nombre && (
                  <p className="error-message">{errores.nombre}</p>
                )}
              </div>
            </div>
            <div className="p-3 w-1/2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errores.email && (
                  <p className="error-message">{errores.email}</p>
                )}
              </div>
            </div>
            <div className="p-3 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Asunto"
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 rounded-2xl-2xl transition-colors duration-200 ease-in-out"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                {errores.subject && (
                  <p className="error-message">{errores.subject}</p>
                )}
              </div>
            </div>
            <div className="p-3 w-full">
              <div className="relative">
                <textarea
                  type="text"
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escribí tu mensaje aquí no mayor a 200 caracteres"
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
                {errores.mensaje && (
                  <p className="error-message">{errores.mensaje}</p>
                )}
              </div>
            </div>
            <Typography>
              <Switch
                id="custom-switch-component"
                ripple={false}
                label={
                  <div>
                    <Typography color="white" variant="lead" className="">
                      Recibir newsletter
                    </Typography>
                  </div>
                }
                className="h-full w-full checked:bg-lightGreen"
                containerProps={{
                  className: "w-16 h-8",
                }}
                circleProps={{
                  className:
                    "before:hidden left-0.5 border border-white bg-white w-8 h-8 p-2",
                  style: {
                    backgroundImage:
                      "url('https://res.cloudinary.com/dsdmjhkms/image/upload/v1709560071/Equilibra-Contable/icons/drplvqt2l0b7znchecs3.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  },
                }}
                defaultChecked
                style={{ color: "red" }}
              />
            </Typography>
            <div className="p-2 w-full flex justify-end">
              <button
                type="submit"
                className="flex text-white bg-lightGreen border-0 py-2 px-8 focus:outline-none rounded-2xl text-lg w-1/2 text-center shadow shadow-md"
              >
                <Typography variant="h5" className="w-full text-center ">
                  Enviar
                </Typography>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
