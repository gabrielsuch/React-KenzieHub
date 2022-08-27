import styled from "styled-components"

export const Container = styled.div `
    max-width: 500px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-gray-4);
    position: fixed;
    z-index: 1;
    opacity: 1;
`

export const ShowOnlyContainer = styled.div `
    width: 100%;
    height: 100vh;
    background-color: var(--color-gray-2);
    opacity: 0.5;
    position: fixed;
    z-index: 0;
    top: 0;
`

export const Header = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;

    button {
        cursor: pointer;
        background-color: transparent;
        color: white;
    }
`

export const Main = styled.div `
    padding: 15px;

    button {
        margin: 15px 0px;
        width: 100%;
        padding: 15px;
        background-color: var(--color-primary);
        color: white;
        cursor: pointer;
        font-size: 1rem;
    }
`

export const Select = styled.select `
    width: 100%;
    padding: 14px;
    background-color: var(--color-gray-2);
    color: white;
`