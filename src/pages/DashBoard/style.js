import styled from "styled-components"

export const Header = styled.div `
    width: 80%;
    margin: 20px auto;
    background-color: #F5F5F5;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
`

export const Avatar = styled.div `
    
`

export const Main = styled.div `
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1800px){
        justify-content: space-evenly;
    }
    
`

export const Card = styled.div `
    width: 480px;
    background-color: #F5F5F5;
    padding: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 10px black;

    @media (max-width: 1800px){
        width: 600px;
        margin-top: 10px;
    }
    @media (max-width: 700px){
        width: 700px;
    }
`

export const Head = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Profile = styled.div `
    width: 32%;
    background-color: #F5F5F5;
    padding: 15px;
`

export const ShowMoreGreen = styled.button `
    padding: 5px 10px;
    border-radius: 5px;
    background-color: green;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`

export const ShowMorePurple = styled.button `
    padding: 5px 10px;
    border-radius: 5px;
    background-color: purple;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`

export const SpanGreen = styled.span `
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: green;
    color: white; 
    padding: 0px 5px 5px 5px;
    border-radius: 5px;
` 

export const SpanPurple = styled.span `
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: purple;
    color: white; 
    padding: 0px 5px 5px 5px;
    border-radius: 5px;
`

export const Li = styled.li `
    display: flex;
    flex-direction: row;
    margin: 10px 0px;
`

export const Infos = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
    width: 80%;

    span:nth-child(1){
        color: black;
        font-weight: bold;
        word-break: break-word;
    }
    span:nth-child(2){
        margin: 5px 0px;
        color: #999999;
        word-break: break-word;
    }
`
export const Difficulty = styled.p`
    background-color: #CAEBDA;
    color: green;
    padding: 5px;
    border-radius: 5px;
    margin-top: 3px;
    width: 100px;
`

export const RemoveButton = styled.button `
    width: 65px;
    height: 30px;
    padding: 5px;
    background-color: red;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`