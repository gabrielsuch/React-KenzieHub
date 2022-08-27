import styled from "styled-components"

export const InputForm = styled.div `
    width: 100%;
    margin: 10px 0px;

    label {
        font-size: 1.1rem;
        color: var(--color-gray-0);
    }

    input {
        width: 100%;
        background-color: var(--color-gray-2);
        color: var(--color-gray-0);
        padding: 16px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`

export const ErrorMessage = styled.span `
    color: red;
`