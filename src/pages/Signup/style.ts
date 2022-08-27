import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div `
    max-width: 500px;
    width: 100%;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 42px 22px;
`

export const Form = styled.form `
    color: red;

    @media (max-width: 420px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const ErrorMessage = styled.span `
    color: red;
`

export const Register = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h1 `
    text-align: center;
    margin: 15px 0px;
`

export const RegisterButton = styled.button `
    width: 100%;
    background-color: #59322F;
    padding: 22px;
    border-radius: 4px;
    cursor: pointer;

    h2 {
        text-align: center;
    }
`

export const Modules = styled.div `
    width: 100%;
`

export const Select = styled.select `
    width: 100%;
    background-color: var(--color-gray-2);
    color: white;
    padding: 16px;
    margin: 20px 0px;
`   