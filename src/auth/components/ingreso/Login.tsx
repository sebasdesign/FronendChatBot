import { Link, useNavigate } from "react-router-dom";
import "@/auth/components/ingreso/Login.css";
import { useState } from "react";


const Login = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasenna, setContrasenna] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = `https://localhost:7263/api/Usuario/${correo}/${contrasenna}`;

    try {
      const response = await fetch(url);

      if (response.status === 404) {
        setError("Usuario no encontrado o contraseña incorrecta.");
        return;
      }

      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }

      const text = await response.text();
      if (text) {
        const usuarioData = JSON.parse(text);
        localStorage.setItem("usuario", JSON.stringify(usuarioData));
        navigate("/chat");
      } else {
        throw new Error("Respuesta vacía del servidor");
      }
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        setError(error.message || 'Ocurrió un error inesperado.');
      } else {
        setError('Ocurrió un error inesperado.');
      }
    }
  };

  return (
    <div className="imagen h-screen flex justify-center items-center">
      <div className="flex flex-col bg-transparent items-center justify-center text-white w-96 space-y-3 p-3">
        <div className="text-center">
          <h1 className="text-xl">
            Bienvenido a <span className="texto">Chatbot</span>
          </h1>
          <h3 className="text-sm">Ingresa a tu cuenta</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 text-center"
        >
          <button className="bg-white flex text-neutral-950 rounded-xl p-2 hover hover:bg-neutral-100">
            <img className="w-5 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/648px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png" alt="" />
            Ingresar con correo institucional
          </button>
          <p>Ó</p>
          <input
            type="text"
            placeholder="Usuario"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="focus:shadow-outline appearance-none rounded-xl border border-white p-3 leading-tight bg-transparent"
          />
          <input
            type="password"
            placeholder="**********"
            value={contrasenna}
            onChange={(e) => setContrasenna(e.target.value)}
            className="focus:shadow-outline appearance-none rounded-xl border border-white p-3 leading-tight bg-transparent"
          />
          {error && <div className="text-red-500 text-xs">{error}</div>}
          <button
            className="bg-red-800 p-2 rounded-xl hover hover:bg-red-700"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="flex text-[0.55rem] space-x-6">
          <p>
            ¿Aún no tienes cuenta?{" "}
            <Link className="hover hover:underline" to="/registro">
              Regístrate
            </Link>
          </p>
          <p className="hover hover:underline">
            <Link to="/registro">¿Olvidó su contraseña?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
