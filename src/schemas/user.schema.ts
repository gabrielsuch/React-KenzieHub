import * as yup from "yup"


export const createUserSchema = yup.object({}).shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
    password: yup.string().required("Campo Obrigatório"),
    confirm_password: yup.string().required("Campo Obrigatório").oneOf([yup.ref("password")], "Senhas Diferentes"),
    course_module: yup.string().required("Campo Obrigatório"),
    bio: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório")
})

export const loginSchema = yup.object({}).shape({
    email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
    password: yup.string().required("Campo Obrigatório")
})