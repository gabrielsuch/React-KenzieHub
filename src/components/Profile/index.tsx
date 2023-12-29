import {Container} from "./style"
import {ContainerCenter, ContainerSplit} from "../../styles/center"

import {useUserContext} from "../../providers/UserContext/index"


export const Profile = () => {

    const {user} = useUserContext()

    return (
        <Container>
            <ContainerCenter>
                <ContainerSplit>
                    <div id="profileName">
                        <h1>Olá, {user.name}</h1>
                    </div>
                    <div id="profileModule">
                        <h1>{user.course_module}</h1>
                    </div>
                </ContainerSplit>
            </ContainerCenter>
        </Container>
    )
}