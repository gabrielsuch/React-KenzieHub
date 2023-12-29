import {useEffect} from "react"

import {Container, Box} from "./style"
import {ContainerCenter} from "../../styles/center"

import {Header} from "../../components/Header/index"
import {Profile} from "../../components/Profile/index"
import {CardTech} from "../../components/Tech/CardTech/index"
import {ModalAddTech} from "../../components/Tech/Modal/Add/index"
import {ModalUpdateTech} from "../../components/Tech/Modal/Update/index"

import {useDashboardContext} from "../../providers/DashboardContext/index"
import {useTech} from "../../providers/TechContext/index"


export const Dashboard = () => {

    const {modalOpen, setModalOpen} = useDashboardContext()
    const {techs, getTechs, setSelectedTech} = useTech()

    useEffect(() => {
        getTechs()
    }, [])

    return (
        <>
            <Header/>
            <Profile/>
            <Container>
                <ContainerCenter>
                    <div id="headerTech">
                        <div className="title">
                            <h1>Tecnologias</h1>
                        </div>
                        <button type="button" onClick={() => setModalOpen("AddTech")}>
                            <div className="title">
                                <h1>+</h1>
                            </div>
                        </button>
                    </div>
                    <Box>
                        <ul id="techs">
                        {
                            techs.map((tech, index) => (
                                <CardTech key={index} tech={tech} setSelectedTech={setSelectedTech} setModalOpen={setModalOpen}/>
                                ))
                            }
                        </ul>
                    </Box>
                </ContainerCenter>
            </Container>
            {modalOpen === "AddTech" && <ModalAddTech/>}
            {modalOpen === "EditTech" && <ModalUpdateTech/>}
        </>
    )
}