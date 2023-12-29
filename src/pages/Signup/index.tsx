import {Container, Header, Box} from "./style"

import {FormSignup} from "./form"

import {useHistory} from "react-router-dom"


export const Signup = () => {

    const history = useHistory()

    return (
        <Container>
            <Header>
                <div id="headerTitle">
                    <h1>Kenzie Hub</h1>
                </div>
                <div id="containerBackButton">
                    <button type="button" onClick={() => history.push("/")}>Voltar</button>
                </div>
            </Header>
            <Box>
                <div className="message">
                    <div className="formTitle">
                        <h1>Crie sua Conta</h1>
                    </div>
                    <div className="formTitle">
                        <h2>Rápido e Grátis, vamos nessa</h2>
                    </div>
                </div>
                <FormSignup/>
            </Box>
        </Container>
    )
}