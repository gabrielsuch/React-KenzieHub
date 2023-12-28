import {Container, Name, Module} from "./style"

import {ContainerCenter} from "../../styles/center"

import {useAuth} from "../../providers/AuthContext/index"


export const Profile = () => {

    const {user} = useAuth()

    return (
        <Container>
            <ContainerCenter>
                <div className="containerSplit">
                    <Name>Olá, {user.name}</Name>
                    <Module>
                        <h1>{user.course_module}</h1>
                    </Module>
                </div>
            </ContainerCenter>
        </Container>
    )
}