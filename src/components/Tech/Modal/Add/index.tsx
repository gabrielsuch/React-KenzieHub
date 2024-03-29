import {Container, Box, ShowOnlyModal} from "../style"

import {FormAddTech} from "./form"

import {useDashboardContext} from "../../../../providers/DashboardContext/index"


export const ModalAddTech = () => {

    const {setModalOpen} = useDashboardContext()

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
                    <FormAddTech/>
                </Box>
            </Container>
            <ShowOnlyModal onClick={() => setModalOpen("None")}/>
        </>
    )
}