import * as yup from "yup"


export const createTechSchema = yup.object({}).shape({
    title: yup.string().required("Campo Obrigatório"),
    status: yup.string().required("Campo Obrigatório")
})

export const updateTechSchema = yup.object({}).shape({
    title: yup.string().optional(),
    status: yup.string().optional()
})