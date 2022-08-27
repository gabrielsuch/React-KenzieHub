import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    border-bottom: 2px solid var(--color-gray-3);
`

export const Center = styled.div `
    max-width: 780px;
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    button {
        background-color: var(--color-gray-3);
        color: white;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
    }
`

export const Title = styled.h1 `
    color: var(--color-primary);
`