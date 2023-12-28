import * as yup from "yup"

import {createTechSchema, updateTechSchema} from "../schemas/tech.schema"


export type TCreateTech = yup.InferType<typeof createTechSchema>
export type TUpdateTech = yup.InferType<typeof updateTechSchema>