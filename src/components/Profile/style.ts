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
`

export const Name = styled.h1 `
    color: white;
`

export const Module = styled.div `
    display: flex;
    flex-direction: column;

    h1 {
        color: var(--color-primary);
    }

    h2 {
        color: var(--color-gray-1);
        padding: 10px 0px;
    }
`