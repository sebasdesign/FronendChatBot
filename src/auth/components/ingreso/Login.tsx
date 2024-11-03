import { Link, useNavigate } from "react-router-dom";
import "@/auth/components/ingreso/Login.css";
import axios from "axios";
import { useFormik } from "formik";
import { LoginValidacion } from "@/auth/components/ingreso/LoginValidacion";


const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      correo: "",
      contrasenna: "",
    },
    validationSchema: LoginValidacion,
    onSubmit: (values) => {
      const usuario = values.correo;
      const password = values.contrasenna;
      const url = "https://localhost:7263/api/Usuario";
      axios
        .get(`${url}/${usuario}/${password}`)
        .then(() => {
          //showSwal();
          navigate("/chat");
        })
        .catch((error) => {
          console.error(error.response.data);
          //showSwal2();
        });
    },
  });
  return (
    <div className="flex justify-center flex-col items-center rounded-xl bg-black bg-cover text-white w-80 space-y-3 p-3">
      <div className="text-center">
        <h1 className="text-xl">
          Bienvenido a <span className="texto">Chatbot</span>
        </h1>
        <h3 className="text-sm">Ingresa a tu cuenta</h3>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-4 text-center"
      >
        <button className="bg-white text-neutral-950 rounded-xl p-2 hover hover:bg-neutral-100">
          Ingresar con correo institucional
        </button>
        <p>Ó</p>
        <input
              type="text"
              placeholder="Usuario"
              name="correo"
              value={formik.values.correo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.correo && formik.touched.correo
                  ? "focus:shadow-outline appearance-none rounded-xl border border-red-800 p-3 leading-tight bg-transparent text-red-800"
                  : "focus:shadow-outline appearance-none rounded-xl border border-white p-3 leading-tight bg-transparent"
              }
            />
            {formik.touched.correo && formik.errors.correo ? (
              <div className="text-red-500 text-xs">{formik.errors.correo}</div>
            ) : null}
        <input
              type="password"
              placeholder="**********"
              name="contrasenna"
              value={formik.values.contrasenna}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.contrasenna && formik.touched.contrasenna
                  ? "focus:shadow-outline appearance-none rounded-xl border border-red-800 p-3 leading-tight bg-transparent text-red-800"
                  : "focus:shadow-outline appearance-none rounded-xl border border-white p-3 leading-tight bg-transparent"
              }
            />
            {formik.touched.contrasenna && formik.errors.contrasenna ? (
              <div className="text-red-500 text-xs">{formik.errors.contrasenna}</div>
            ) : null}
        <button
          className="bg-red-800 p-2 rounded-xl hover hover:bg-red-700"
          type="submit"
        >
          Iniciar Sesión
        </button>
      </form>
      <div className=" flex text-[0.55rem] space-x-6">
        <p className=" items-start">
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
  );
};

export default Login;
