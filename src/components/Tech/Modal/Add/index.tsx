import {Container, Box, ShowOnlyModal} from "../style"

import {Input} from "../../../Input/index"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {createTechSchema} from "../../../../schemas/tech.schema"
import {TCreateTech} from "../../../../types/tech.type"

import {useDashboardContext} from "../../../../providers/DashboardContext/index"
import {useTech} from "../../../../providers/TechContext/index"


export const ModalAddTech = () => {

    const {setModalOpen} = useDashboardContext()
    const {difficultyOptions, createTech} = useTech()

    const {register, handleSubmit, formState: {errors}} = useForm<TCreateTech>({
        resolver: yupResolver(createTechSchema)
    })

    const onSubmit = async (data: TCreateTech) => {
        await createTech(data)
    }

    return (
        <>
            <Container>
                <div className="headerTech">
                    <div className="headerTitle">
                        <h1>Cadastrar Tecnologia</h1>
                    </div>
                    <div className="headerClose">
                        <button onClick={() => setModalOpen("None")}>X</button>
                    </div>
                </div>
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="text" id="title" placeholder="Nome" label="Nome" register={register} error={errors.title}/>
                        <select {...register("status")}>
                            {
                                difficultyOptions.map((option, index) => (
                                    <option key={index}>{option}</option>
                                ))
                            }
                        </select>
                        <div className="containerButton">
                            <button type="submit">Cadastrar Tecnologia</button>
                        </div>
                    </form>
                </Box>
            </Container>
            <ShowOnlyModal onClick={() => setModalOpen("None")}/>
        </>
    )
}