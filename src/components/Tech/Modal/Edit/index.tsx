import {Container, Box, ShowOnlyModal} from "../style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {updateTechSchema} from "../../../../schemas/tech.schema"
import {TUpdateTech} from "../../../../types/tech.type"

import {useDashboardContext} from "../../../../providers/DashboardContext/index"
import {useTech} from "../../../../providers/TechContext/index"


export const ModalEditTech = () => {
    
    const {setModalOpen} = useDashboardContext()
    const {difficultyOptions, deleteTech, updateTech, selectedTech} = useTech()

    const {register, handleSubmit} = useForm<TUpdateTech>({
        resolver: yupResolver(updateTechSchema)
    })

    const onSubmit = async (data: TUpdateTech) => {
        await updateTech(selectedTech.id, data)
    }

    return (
        <>
            <Container>
                <div className="headerTech">
                    <div className="headerTitle">
                        <h2>Tecnologia Detalhes</h2>
                    </div>
                    <div className="headerClose">
                        <button onClick={() => setModalOpen("None")}>X</button>
                    </div>
                </div>
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select {...register("status")}>
                        {
                            difficultyOptions.map((option, index) => (
                                <option key={index}>{option}</option>
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
                    </form>
                </Box>
            </Container>
            <ShowOnlyModal onClick={() => setModalOpen("None")}/>
        </>
    )
}