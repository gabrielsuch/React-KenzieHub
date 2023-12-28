import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    border-bottom: 2px solid var(--color-gray-3);
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
`