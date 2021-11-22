import styled from "styled-components"

export const Middle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const KenzieHub = styled.div `
    margin-bottom: 10px;

    p{
        font-size: 1.5rem;
    }
    span{
        font-size: 1rem;
        padding: 5px;
        color: white;
        background-color: #403CAA;
        border-radius: 5px;
    }
`

export const Box = styled.div `
    width: 25%;
    padding: 20px;
    border: 1px solid gray;

    @media (max-width: 1150px){
        width: 50%;
    }
    @media(max-width: 650px){
        width: 90%;
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
`
export const Input = styled.input `
    padding: 15px 10px;
    border-radius: 5px;
    margin: 10px 0px;
    background-color: #F5F5F5;
`

export const Modules = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px;

    span{
        color: #403CAA;
    }
`

export const Button = styled.button `
    background-color: #403CAA;
    color: white;
    border-radius: 5px;
    padding: 10px 0px;
    text-align: center;
    font-size: 1.5rem;
    cursor: pointer;
    width: 100%;
`

export const ErrorMessage = styled.span `
    color: red;
`

export const AlreadyRegistered = styled.div `
    font-size: 1.5rem;
    margin: 5px 0px;
    cursor: pointer;
`