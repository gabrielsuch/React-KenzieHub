import {Container, HeaderTech, Title, PlusIcon, Box} from "./style"
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
                    <HeaderTech>
                        <Title>Tecnologias</Title>
                        <PlusIcon onClick={() => setModalOpen("AddTech")}>
                            <Title>+</Title>
                        </PlusIcon>
                    </HeaderTech>
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