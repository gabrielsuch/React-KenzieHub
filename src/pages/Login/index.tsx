import {Container, Header, Box} from "./style"

import {useHistory} from "react-router-dom"

import {FormLogin} from "./form"


export const Login = () => {
    
    const history = useHistory()

    return (
        <Container>
            <Header>
                <div id="headerTitle">
                    <h1>Kenzie Hub</h1>
                </div>
            </Header>
            <Box>
                <div id="title">
                    <h1>Login</h1>
                </div>
                <FormLogin/>
                <div id="containerMessage">
                    <h3>Ainda não possui uma conta?</h3>
                </div>
                <div id="containerRegister">
                    <button type="button" onClick={() => history.push("/signup")}>Cadastrar</button>
                </div>
            </Box>
        </Container>
    )
}