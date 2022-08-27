import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header `
    max-width: 500px;
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: center;

    .headerTitle {
        h1 {
            color: var(--color-primary);
        }
    }
`

export const Box = styled.div `
    max-width: 500px;
    width: 100%;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 42px 22px;

    /* @media (max-width: 420px){
        height: 100vh;
    } */
`

export const Form = styled.form `
    @media (max-width: 420px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const Register = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* @media (max-width: 420px){
        height: 95vh;
    } */
`

export const Title = styled.h1 `
    text-align: center;
    margin: 15px 0px;
`

export const LoginButton = styled.button `
    width: 100%;
    background-color: var(--color-primary);
    padding: 22px;
    border-radius: 4px;
    cursor: pointer;
`

export const CreateAccount = styled.div `
    margin: 20px 0px;

    h3 {
        color: var(--color-gray-1);
        text-align: center;
    }
`

export const RegisterButton = styled.button `
    width: 100%;
    background-color: var(--color-gray-1);
    padding: 22px;
    border-radius: 4px;
    cursor: pointer;

    h2{
        text-align: center;
    }
`