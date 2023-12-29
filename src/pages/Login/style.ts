import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    height: 100vh;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header `
    max-width: 500px;
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: center;

    #headerTitle {
        h1 {
            color: var(--color-primary);
        }
    }
`

export const Box = styled.div `
    max-width: 500px;
    width: 100%;
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 42px 22px;
    
    form {
        width: 100%;
        display: flex;
        flex-direction: column;

        #title {
            margin-bottom: 10px;
            
            h1 {
                font-size: 1.3rem;
                font-weight: bold;
                text-align: center;
                color: #FFFFFF;
            }
        }

        #containerButton {
            button {
                width: 100%;
                padding: 22px;
                font-size: 1rem;
                font-weight: bold;
                border-radius: 4px;
                color: #FFFFFF;
                background-color: var(--color-primary);
                cursor: pointer;
            }
        }

        #containerMessage {
            margin: 20px 0px;

            h3 {
                text-align: center;
                color: var(--color-gray-1);
            }
        }
    }

    #containerRegister {
        width: 100%;
        
        button {
            width: 100%;
            font-size: 1rem;
            font-weight: bold;
            padding: 22px;
            border-radius: 4px;
            color: #FFFFFF;
            background-color: var(--color-gray-1);
            cursor: pointer;
        }
    }
`