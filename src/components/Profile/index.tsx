import {Container, Center, Name, Module} from "./style"
import {useAuth} from "../../providers/AuthContext/index"


const Profile = () => {

    const {user} = useAuth()

    return (
        <Container>
            <Center>
                <Name>Olá, {user.name}</Name>
                <Module>
                    <h1>{user.course_module}</h1>
                </Module>
            </Center>
        </Container>
    )
}

export default Profile