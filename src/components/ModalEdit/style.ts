import styled from "styled-components"

export const Container = styled.div `
    max-width: 500px;
    width: 100%;
    background-color: var(--color-gray-4);
    position: fixed;
    z-index: 1;
    padding: 15px;
    left: 50%;
    transform: translateX(-50%);
`

export const ShowOnlyContainer = styled.div `
    width: 100%;
    height: 100vh;
    background-color: var(--color-gray-2);
    position: fixed;
    opacity: 0.5;
    z-index: 0;
    top: 0;
`

export const Header = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    
    button {
        background-color: transparent;
        cursor: pointer;
        color: white;
    }
`

export const Main = styled.div `
    display: flex;
    flex-direction: column;
`

export const Select = styled.select `
    background-color: var(--color-gray-2);
    color: white;
    padding: 10px;
    width: 100%;
`

export const Actions = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0px;
`

export const SaveButton = styled.button `
    background-color: var(--color-primary);
    color: white;
    width: 60%;
    padding: 15px;
    cursor: pointer;
`

export const DeleteButton = styled.button `
    background-color: var(--color-gray-1);
    color: white;
    width: 35%;
    padding: 15px;
    cursor: pointer;
`