import {Container, Box, ShowOnlyModal} from "../style"

import {FormUpdateTech} from "./form"

import {useDashboardContext} from "../../../../providers/DashboardContext/index"


export const ModalUpdateTech = () => {
    
    const {setModalOpen} = useDashboardContext()

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
                    <FormUpdateTech/>
                </Box>
            </Container>
            <ShowOnlyModal onClick={() => setModalOpen("None")}/>
        </>
    )
}