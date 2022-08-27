import {Container, Center, Title} from "./style"
import {useAuth} from "../../providers/AuthContext/index"

const Header = () => {

    const {logout} = useAuth()

    return (
        <Container>
            <Center>
                <Title>Kenzie Hub</Title>
                <button onClick={() => logout()}>Sair</button>
            </Center>
        </Container>
    )
}

export default Header