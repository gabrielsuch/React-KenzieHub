import {Container} from "./style"
import {ContainerCenter} from "../../styles/center"

import {useAuth} from "../../providers/AuthContext/index"


export const Header = () => {

    const {logout} = useAuth()

    return (
        <Container>
            <ContainerCenter>
                <div className="title">
                    <h1>Kenzie Hub</h1>
                </div>
                <div className="containerButton">
                    <button type="button" onClick={() => logout()}>Sair</button>
                </div>
            </ContainerCenter>
        </Container>
    )
}