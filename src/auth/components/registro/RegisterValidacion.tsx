import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const RegisterValidacion = Yup.object({
  nombre: Yup.string().required("El campo Nombre es obligatorio"),
  apellido: Yup.string().required("El campo Apellido es obligatorio"),
  correo: Yup.string()
    .email("Ingrese un correo válido")
    .required("Ingrese un correo"),
  tipoDocumento: Yup.string().required("Ingrese un tipo de documento valido"),
  documento: Yup.number()
    .typeError("El campo documento debe ser un número")
    .positive("El número de documento debe ser positivo")
    .integer("El número de documento debe ser entero")
    .required("Ingrese un documento valido"),
  contrasenna: Yup.string()
    .min(8, "Debe tener mínimo 8 caracteres")
    .matches(passwordRules, {
      message: "Debe tener una mayúscula, una minúscula y un número",
    })
    .required("Ingrese la contraseña"),
  confirmarContrasenna: Yup.string()
    .oneOf([Yup.ref("contrasenna")], "Las contraseñas no coinciden")
    .required("Ingrese la contraseña"),
  rol: Yup.string().required("El rol es requerido"),
});
