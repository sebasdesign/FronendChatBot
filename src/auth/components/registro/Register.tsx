import "@/auth/components/ingreso/Login.css";
import axios from "axios";
import { useFormik } from "formik";
import { RegisterValidacion } from "@/auth/components/registro/RegisterValidacion";

interface RegistroData {
  usrNombre: string;
  usrApellido: string;
  usrCorreo: string;
  usrSemestre: string;
  usrCodigo: string;
  usrTipoUsuario: string;
  usrContrasenna: string;
}

const Register = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      semestre: "",
      codigo: "",
      tipoUsuario: "",
      contrasenna: "",
    },
    validationSchema: RegisterValidacion,
    onSubmit: (values) => {
      const data: RegistroData = {
        usrNombre: values.nombre,
        usrApellido: values.apellido,
        usrCorreo: values.correo,
        usrSemestre: values.semestre,
        usrContrasenna: values.contrasenna,
        usrTipoUsuario: values.tipoUsuario,
        usrCodigo: values.codigo,
      };
      const url = "https://localhost:7263/api/Usuario";
      axios
        .post(url, data)
        .then(() => {
          //showSwal();
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
        <h3 className="text-sm">Crea tu cuenta</h3>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-4 text-center"
      >
        <button className="bg-white text-neutral-950 rounded-xl p-2 hover hover:bg-neutral-100">
          Crear con correo institucional
        </button>
        <p>Ó</p>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.nombre && formik.touched.nombre
              ? "focus:shadow-outline appearance-none rounded-xl border border-red-800 p-3 leading-tight bg-transparent text-red-800"
              : "focus:shadow-outline appearance-none rounded-xl border border-white p-3 leading-tight bg-transparent"
          }
        />
        {formik.touched.nombre && formik.errors.nombre ? (
          <div className="text-red-500 text-xs">{formik.errors.nombre}</div>
        ) : null}
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          value={formik.values.apellido}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.apellido && formik.touched.apellido
              ? "focus:shadow-outline appearance-none rounded-xl border border-red-800 p-3 leading-tight bg-transparent text-red-800"
              : "focus:shadow-outline appearance-none rounded-xl border border-white p-3 leading-tight bg-transparent"
          }
        />
        {formik.touched.apellido && formik.errors.apellido ? (
          <div className="text-red-500 text-xs">{formik.errors.apellido}</div>
        ) : null}
        <input
          type="text"
          placeholder="Correo"
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
          type="text"
          placeholder="Semestre"
          name="semestre"
          value={formik.values.semestre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.semestre && formik.touched.semestre
              ? "focus:shadow-outline appearance-none rounded-xl border border-red-800 p-3 leading-tight bg-transparent text-red-800"
              : "focus:shadow-outline appearance-none rounded-xl border border-white p-3 leading-tight bg-transparent"
          }
        />
        {formik.touched.semestre && formik.errors.semestre ? (
          <div className="text-red-500 text-xs">{formik.errors.semestre}</div>
        ) : null}
        <input
          type="text"
          placeholder="Código"
          name="codigo"
          value={formik.values.codigo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.codigo && formik.touched.codigo
              ? "focus:shadow-outline appearance-none rounded-xl border border-red-800 p-3 leading-tight bg-transparent text-red-800"
              : "focus:shadow-outline appearance-none rounded-xl border border-white p-3 leading-tight bg-transparent"
          }
        />
        {formik.touched.codigo && formik.errors.codigo ? (
          <div className="text-red-500 text-xs">{formik.errors.codigo}</div>
        ) : null}
        <input
              type="text"
              placeholder="Tipo Usuario"
              name="tipoUsuario"
              value={formik.values.tipoUsuario}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.tipoUsuario && formik.touched.tipoUsuario
                  ? "focus:shadow-outline appearance-none rounded-xl border border-red-800 p-3 leading-tight bg-transparent text-red-800"
                  : "focus:shadow-outline appearance-none rounded-xl border border-white p-3 leading-tight bg-transparent"
              }
            />
            {formik.touched.tipoUsuario && formik.errors.tipoUsuario ? (
              <div className="text-red-500 text-xs">{formik.errors.tipoUsuario}</div>
            ) : null}
            <input
              type="password"
              placeholder="Contraseña"
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
          Crear Cuenta
        </button>
      </form>
    </div>
  );
};

export default Register;
