import {Container, Center, HeaderTech, Title, PlusIcon, Box} from "./style"
import Header from "../../components/Header/index"
import Profile from "../../components/Profile/index"
import CardTech from "../../components/CardTech/index"
import ModalAdd from "../../components/ModalAdd/index"
import ModalEdit from "../../components/ModalEdit/index"

import {useDashboardContext} from "../../providers/DashboardContext/index"
import {useTech} from "../../providers/TechContext/index"

import {useEffect} from "react"


const Dashboard = () => {

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
                <Center>
                    <HeaderTech>
                        <Title>Tecnologias</Title>
                        <PlusIcon onClick={() => setModalOpen("AddTech")}>
                            <Title>+</Title>
                        </PlusIcon>
                    </HeaderTech>
                    <Box>
                        {
                            techs.map((tech, index) => (
                                <CardTech key={index} tech={tech} setSelectedTech={setSelectedTech} setModalOpen={setModalOpen}/>
                            ))
                        }
                    </Box>
                </Center>
            </Container>
        </>
    )
}

export default Dashboard