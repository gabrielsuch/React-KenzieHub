import {Container} from "./style"
import {ContainerCenter} from "../../styles/center"

import {useUserContext} from "../../providers/UserContext/index"


export const Header = () => {

    const {logout} = useUserContext()

    return (
        <Container>
            <ContainerCenter>
                <div className="containerSplit">
                    <div className="title">
                        <h1>Kenzie Hub</h1>
                    </div>
                    <div className="containerButton">
                        <button type="button" onClick={() => logout()}>Sair</button>
                    </div>
                </div>
            </ContainerCenter>
        </Container>
    )
}