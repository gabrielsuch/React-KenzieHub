import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100%;
    padding: 0px 5px 15px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.header `
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0px;

    .headerTitle {
        h1 {
            color: var(--color-primary);
        }
    }

    .backButton {
        border-radius: 4px;
        padding: 10px;
        background-color: var(--color-gray-3);
        cursor: pointer;
        
        button {
            color: var(--color-gray-0);
            background-color: transparent;
            cursor: pointer;
        }
    }
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

export const Title = styled.div `
    text-align: center;
    margin: 15px 0px;

    h1 {
        font-weight: 700;
    }

    h2 {
        color: var(--color-gray-1);
    }
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