import "@/auth/components/registro/Register.css";
import BotonAtras from "@/components/BotonAtras";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    identificacion: "",
    nombre: "",
    apellido: "",
    correo: "",
    semestre: "",
    codigo: "",
    tipoUsuario: "",
    contrasenna: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://localhost:7130/api/Usuario";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formData.identificacion,
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.correo,
          contrasena: formData.contrasenna,
          semestre: parseInt(formData.semestre, 10),
          tipoUsuario: formData.tipoUsuario,
          codigo: formData.codigo,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      alert("Usuario registrado exitosamente");
    } catch (error) {
      console.error("Hubo un error al registrar el usuario:", error);
      alert("Error al registrar el usuario");
    }
  };

  return (
    <div className="imagen h-screen flex justify-center items-center">
      <div className="absolute left-64 top-20"><BotonAtras/></div>
      <div className="flex justify-center flex-col items-center text-white w-96 space-y-3 p-3">
      <div className="text-center">
        <h1 className="text-xl">
          Bienvenido a <span className="texto">Chatbot</span>
        </h1>
        <h3 className="text-sm">Crea tu cuenta</h3>
      </div>
      
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 text-center w-64"
      >
        <input
          type="text"
          placeholder="Identificación"
          name="identificacion"
          value={formData.identificacion}
          onChange={handleChange}
          className="focus:shadow-outline appearance-none text-sm rounded-xl border border-white p-2 leading-tight bg-transparent"
        />
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="focus:shadow-outline appearance-none text-sm rounded-xl border border-white p-2 leading-tight bg-transparent"
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="focus:shadow-outline appearance-none text-sm rounded-xl border border-white p-2 leading-tight bg-transparent"
        />
        <input
          type="text"
          placeholder="Correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          className="focus:shadow-outline appearance-none text-sm rounded-xl border border-white p-2 leading-tight bg-transparent"
        />
        <input
          type="text"
          placeholder="Semestre"
          name="semestre"
          value={formData.semestre}
          onChange={handleChange}
          className="focus:shadow-outline appearance-none text-sm rounded-xl border border-white p-2 leading-tight bg-transparent"
        />
        <input
          type="text"
          placeholder="Código"
          name="codigo"
          value={formData.codigo}
          onChange={handleChange}
          className="focus:shadow-outline appearance-none text-sm rounded-xl border border-white p-2 leading-tight bg-transparent"
        />
        <input
          type="text"
          placeholder="Tipo Usuario"
          name="tipoUsuario"
          value={formData.tipoUsuario}
          onChange={handleChange}
          className="focus:shadow-outline appearance-none text-sm rounded-xl border border-white p-2 leading-tight bg-transparent"
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="contrasenna"
          value={formData.contrasenna}
          onChange={handleChange}
          className="focus:shadow-outline appearance-none text-sm rounded-xl border border-white p-2 leading-tight bg-transparent"
        />
        <button
          className="bg-red-800 p-2 rounded-xl hover hover:bg-red-700"
          type="submit"
        >
          Crear Cuenta
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
