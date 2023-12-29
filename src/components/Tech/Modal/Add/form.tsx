import {Form} from "../style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {createTechSchema} from "../../../../schemas/tech.schema"
import {TCreateTech} from "../../../../types/tech.type"

import {Input} from "../../../Input/index"

import {useTech} from "../../../../providers/TechContext/index"


export const FormAddTech = () => {

    const {difficultyOptions, createTech} = useTech()

    const {register, handleSubmit, formState: {errors}} = useForm<TCreateTech>({
        resolver: yupResolver(createTechSchema)
    })

    const onSubmit = async (data: TCreateTech) => {
        await createTech(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" id="title" placeholder="Nome" label="Nome" register={register} error={errors.title}/>
            <select {...register("status")}>
                {
                    difficultyOptions.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))
                }
            </select>
            <div className="containerAddButton">
                <button type="submit">Cadastrar Tecnologia</button>
            </div>
        </Form>
    )
}