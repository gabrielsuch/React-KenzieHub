import styled from "styled-components"

export const ContainerCard = styled.div `
    width: 30%;
    position: fixed;
    top: 110px;
    left: 33%;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 25px black;

    @media (max-width: 1000px){
        width: 80%;
        left: 10%;
    }
`

export const Header = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CloseButton = styled.button `
    cursor: pointer;
    padding: 10px;
`

export const Input = styled.input `
    width: 100%;
    padding: 15px 10px;
    border-radius: 5px;
    margin: 10px 0px;
    background-color: #F5F5F5;
`

export const Form = styled.form`
    padding: 5px;
`

export const Levels = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px;
`

export const Label = styled.label `

    span{
        color: #403CAA;
    }
`