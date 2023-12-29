import styled from "styled-components"


export const Container = styled.div `
    max-width: 500px;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 1;
    background-color: var(--color-gray-4);

    .headerTech {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;

        .headerTitle {
            h1 {
                font-size: 1.2rem;
                font-weight: bold;
                color: #FFFFFF;
            }
        }

        .headerClose {
            button {
                font-weight: bold;
                color: #FFFFFF;
                background-color: transparent;
                cursor: pointer;
            }
        }
    }
`

export const Box = styled.div `
    padding: 15px;
`

export const Form = styled.form `
    width: 100%;
    display: flex;
    flex-direction: column;

    select {
        width: 100%;
        padding: 14px;
        color: #FFFFFF;
        background-color: var(--color-gray-2);
    }

    .containerAddButton {
        width: 100%;
        
        button {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 15px 0px;
            padding: 15px;
            color: #FFFFFF;
            background-color: var(--color-primary);
            cursor: pointer;
        }
    }

    .containerButtons {
        width: 100%;
        margin: 15px 0px;
        gap: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        #containerSave {
            width: 100%;

            button {
                width: 100%;
                font-size: 1rem;
                padding: 15px;
                color: #FFFFFF;
                background-color: var(--color-primary);
                cursor: pointer;
            }
        }

        #containerDelete {
            width: 100%;

            button {
                width: 100%;
                font-size: 1rem;
                padding: 15px;
                color: #FFFFFF;
                background-color: var(--color-gray-1);
                cursor: pointer;
            }
        }
    }
`

export const ShowOnlyModal = styled.div `
    width: 100%;
    height: 100vh;
    background-color: var(--color-gray-2);
    opacity: 0.5;
    position: fixed;
    z-index: 0;
    top: 0;
`