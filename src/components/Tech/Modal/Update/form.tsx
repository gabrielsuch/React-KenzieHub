import {useEffect} from "react"

import {Form} from "../style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {updateTechSchema} from "../../../../schemas/tech.schema"
import {TUpdateTech} from "../../../../types/tech.type"

import {useTech} from "../../../../providers/TechContext/index"


export const FormUpdateTech = () => {

    const {selectedTech, difficultyOptions, updateTech, deleteTech} = useTech()

    const {register, handleSubmit, reset} = useForm<TUpdateTech>({
        resolver: yupResolver(updateTechSchema)
    })

    const onSubmit = async (data: TUpdateTech) => {
        await updateTech(selectedTech.id, data)
    }

    useEffect(() => {
        reset({
            status: selectedTech.status
        })
    }, [])

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("status")}>
            {
                difficultyOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))
            }
            </select>
            <div className="containerButtons">
                <div id="containerSave">
                    <button type="submit">Salvar Alterações</button>
                </div>
                <div id="containerDelete">
                    <button type="button" onClick={async() => await deleteTech(selectedTech.id)}>Excluir</button>
                </div>
            </div>
        </Form>
    )
}