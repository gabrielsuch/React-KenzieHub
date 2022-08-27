import {Container, Center, HeaderTech, Title, PlusIcon, Box} from "./style"
import Header from "../../components/Header/index"
import Profile from "../../components/Profile/index"
import CardTech from "../../components/CardTech/index"
import ModalAdd from "../../components/ModalAdd/index"
import ModalEdit from "../../components/ModalEdit/index"

import {useTech} from "../../providers/TechContext/index"

import {useEffect} from "react"


const Dashboard = () => {

    const {techs, getTechs, openModalState, openModal, openEdit} = useTech()

    useEffect(() => {
        getTechs()
    }, [])

    return (
        <>
            <Header/>
            <Profile/>
            {
                openModal &&
                <ModalAdd/>
            }
            {
                openEdit &&
                <ModalEdit/>
            }
            <Container>
                <Center>
                    <HeaderTech>
                        <Title>Tecnologias</Title>
                        <PlusIcon onClick={() => openModalState()}>
                            <Title>+</Title>
                        </PlusIcon>
                    </HeaderTech>
                    <Box>
                        {
                            techs.map((tech, index) => (
                                <CardTech key={index} tech={tech}/>
                            ))
                        }
                    </Box>
                </Center>
            </Container>
        </>
    )
}

export default Dashboard