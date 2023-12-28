import * as yup from "yup"

import {createTechSchema, updateTechSchema} from "../schemas/tech.schema"

export type TTech = {
    id: string
    title: string
    status: string
    created_at: string
    updated_at: string
    user: {
        id: string
    }
}

export type TCreateTech = yup.InferType<typeof createTechSchema>
export type TUpdateTech = yup.InferType<typeof updateTechSchema>