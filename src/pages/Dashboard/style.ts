import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 80vh;
`

export const Center = styled.div `
    max-width: 780px;
    margin: auto;
`

export const HeaderTech = styled.div `
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h1 `
    color: white;
`

export const PlusIcon = styled.button `
    padding: 8px;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    cursor: pointer;
`

export const Box = styled.div `
    max-width: 740px;
    margin: auto;
    padding: 20px;
    background-color: var(--color-gray-3);
    border-radius: 4px;
`