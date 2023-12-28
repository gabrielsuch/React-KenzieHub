import {Container, Box} from "./style"
import {ContainerCenter} from "../../styles/center"

import {Header} from "../../components/Header/index"
import {Profile} from "../../components/Profile/index"
import {CardTech} from "../../components/CardTech/index"
import {ModalAdd} from "../../components/ModalAdd/index"
import {ModalEdit} from "../../components/ModalEdit/index"

import {useDashboardContext} from "../../providers/DashboardContext/index"
import {useTech} from "../../providers/TechContext/index"

import {useEffect} from "react"


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
            {modalOpen === "AddTech" && <ModalAdd/>}
            {modalOpen === "EditTech" && <ModalEdit/>}
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
        </>
    )
}