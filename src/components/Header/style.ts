import styled from "styled-components"


export const Container = styled.header `
    width: 100%;
    border-bottom: 2px solid var(--color-gray-3);

    .title {
        h1 {
            color: var(--color-primary);
        }
    }

    .containerButton {
        button {
            background-color: var(--color-gray-3);
            color: white;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`