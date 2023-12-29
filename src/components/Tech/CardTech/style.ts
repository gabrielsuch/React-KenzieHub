import styled from "styled-components"


export const Container = styled.li `
    width: 100%;
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

    .title {
        h1 {
            color: #FFFFFF;
        }
    }

    .status {
        h3 {
            color: var(--color-gray-3);
        }
    }
`