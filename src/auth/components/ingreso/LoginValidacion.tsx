import * as Yup from 'yup'

export const LoginValidacion = Yup.object({
    correo: Yup.string().email('Ingrese un correo valido').required('Ingrese un correo'),
    contrasenna: Yup.string().required('Ingrese la contraseña'),
})