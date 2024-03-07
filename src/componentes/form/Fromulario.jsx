import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, Typography } from "@material-tailwind/react";
import "./Fromulario.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [subject, setSubject] = useState("");
  const [errores, setErrores] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
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

    setLoading(true);
    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_REACT_APP_WEB3FORMS_ACCESS_KEY
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setLoading(false);

        // sweet alert
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Mensaje enviado con éxito!",
        });
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

    // Limpiar el formulario después del envío exitoso
    setNombre("");
    setEmail("");
    setMensaje("");
    setSubject("");
    setErrores({});
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
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-lg outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-lg outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-lg outline-none text-gray-700 py-4 px-3 leading-8 rounded-2xl-2xl transition-colors duration-200 ease-in-out"
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
              <div className="">
                <textarea
                  type="text"
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escribí tu mensaje aquí no mayor a 200 caracteres"
                  className="w-full placeholder-black placeholder-opacity-100 bg-gray rounded-2xl focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-38 text-lg outline-none text-gray-900 pb-32 pt-4 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
                {errores.mensaje && (
                  <p className="error-message">{errores.mensaje}</p>
                )}
              </div>
            </div>
            <div className="p-2 w-full flex justify-end">
              <Button
                type="submit"
                className="flex text-white bg-lightGreen border-0 py-4 px-8 focus:outline-none rounded-2xl text-lg w-1/2 text-center shadow shadow-md"
                loading={loading ? true : false}
              >
                <span className="w-full text-center">Enviar</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
