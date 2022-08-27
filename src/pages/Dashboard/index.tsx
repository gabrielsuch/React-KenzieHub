import {Container, Center, HeaderTech, Title, PlusIcon, Box} from "./style"
import Header from "../../components/Header/index"
import Profile from "../../components/Profile/index"
import Techs from "../../components/Techs/index"
import ModalAdd from "../../components/ModalAdd/index"
import ModalEdit from "../../components/ModalEdit/index"
import {useAuth} from "../../providers/AuthContext/index"

import {useEffect} from "react"


const Dashboard = () => {

    const {user, techs, getTechs, openModalState, openModal, openEdit} = useAuth()

    useEffect(() => {
        getTechs(user.id)
    }, [user.id])

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
                                <Techs key={index} tech={tech}/>
                            ))
                        }
                    </Box>
                </Center>
            </Container>
        </>
    )
}

export default Dashboard