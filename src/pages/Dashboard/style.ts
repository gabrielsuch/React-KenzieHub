import styled from "styled-components"


export const Container = styled.main `
    width: 100%;
    height: 80vh;

    #headerTech {
        width: 100%;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .title {
            h1 {
                color: #FFFFFF;
            }
        }

        button {
            padding: 8px;
            background-color: var(--color-gray-3);
            border-radius: 4px;
            cursor: pointer;
        }
    }
`

export const Box = styled.div `
    max-width: 740px;
    margin: auto;
    padding: 20px;
    background-color: var(--color-gray-3);
    border-radius: 4px;

    ul#techs {
        list-style: none;
    }
`