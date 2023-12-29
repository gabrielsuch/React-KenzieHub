import {Container} from "./style"
import {ContainerCenter, ContainerSplit} from "../../styles/center"

import {useUserContext} from "../../providers/UserContext/index"


export const Header = () => {

    const {logout} = useUserContext()

    return (
        <Container>
            <ContainerCenter>
                <ContainerSplit>
                    <div className="title">
                        <h1>Kenzie Hub</h1>
                    </div>
                    <div className="containerButton">
                        <button type="button" onClick={() => logout()}>Sair</button>
                    </div>
                </ContainerSplit>
            </ContainerCenter>
        </Container>
    )
}