import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    height: 100%;
    padding: 0px 5px 15px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.header `
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0px;

    #headerTitle {
        h1 {
            color: var(--color-primary);
        }
    }

    #containerBackButton {
        border-radius: 4px;
        padding: 10px;
        background-color: var(--color-gray-3);
        cursor: pointer;
        
        button {
            color: var(--color-gray-0);
            background-color: transparent;
            cursor: pointer;
        }
    }
`

export const Box = styled.div `
    max-width: 500px;
    width: 100%;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 42px 22px;
    margin: 10px 0px;

    .formTitle {
        text-align: center;
        margin: 5px 0px;

        h1 {
            font-weight: 700;
        }

        h2 {
            color: var(--color-gray-1);
        }
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;

        #modules {
            width: 100%;

            select {
                width: 100%;
                padding: 16px;
                margin: 20px 0px;
                color: #FFFFFF;
                background-color: var(--color-gray-2);
            }
        }

        #containerButton {
            button {
                width: 100%;
                padding: 22px;
                border-radius: 4px;
                text-align: center;
                color: #FFFFFF;
                background-color: #59322F;
                cursor: pointer;
            }
        }
    }
`

export const ErrorMessage = styled.span `
    color: red;
`