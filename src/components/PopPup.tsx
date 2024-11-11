import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const PopPup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={openModal}
          className="text-white opacity-60 hover:scale-110"
        >
          <BsInfoCircle className="size-10" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            />

            <div className="w-full max-w-md space-y-4 transform overflow-hidden rounded-2xl bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="justify-center hover:scale-110 text-white"
                  onClick={closeModal}
                >
                  <IoClose className="size-6" />
                </button>
              </div>
              <h3 className="text-lg font-medium leading-6 text-gray-50">
                1. Bienvenida y Primer Paso
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-400">
                  ¡Bienvenido al chatbot universitario! Este asistente está
                  diseñado para ayudarte en la gestión de tus materias y a
                  acceder a servicios específicos según tu rol (estudiante o
                  profesor). Para iniciar, simplemente saluda al chatbot
                  escribiendo 'Hola' o 'Buenos días'. Este paso es esencial para
                  que el chatbot comience a responder.
                </p>
              </div>
              <h3 className="text-lg font-medium leading-6 text-gray-50">
                2. Cómo Navegar por el Chatbot
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-400">
                  Una vez activado, sigue las instrucciones del chatbot. Puedes
                  realizar tus consultas una por una o pedir ayuda en cualquier
                  momento si tienes dudas sobre el uso de un comando.
                </p>
              </div>
              <h3 className="text-lg font-medium leading-6 text-gray-50">
                3. Sugerencias y Recomendaciones
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-400">
                  Evita enviar mensajes fuera del contexto académico, y si
                  necesitas reiniciar la conversación, simplemente envía un
                  nuevo saludo. Este chatbot está aquí para hacer tu experiencia
                  en la plataforma más sencilla y rápida..
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopPup;
