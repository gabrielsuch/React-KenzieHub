import styled from "styled-components"

export const OptionBox = styled.div `
    max-width: 740px;
    padding: 20px;
    margin: 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: var(--color-gray-4);

    :hover {
        background-color: var(--color-gray-2);
        transition: 0.5s;
        cursor: pointer;
    }
`

export const Title = styled.h1 `
    color: white;
`

export const Difficulty = styled.h3 `
    color: var(--color-gray-3);
`