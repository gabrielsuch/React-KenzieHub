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
    border-radius: 10px;

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
    width: 480px;
`

export const Avatar = styled.div `
    border-radius: 50%;
    background-color: #11995E;
`

export const Course = styled.div `
    display: flex;
    flex-direction: row;
    padding: 15px;
    background-color: #403CAA;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;
`

export const Name = styled.div `
    width: 300px;
    margin: 0px 5px;
`

export const CourseModule = styled.div `
    width: 300px;
    margin: 10px 5px;
`

export const About = styled.div `
    display: flex;
    flex-direction: column;
    width: 200px;
`

export const Contact = styled.div `
    width: 100%;
    background-color: white;
`
export const CardContact = styled.div `
    width: 90%;
    margin: 15px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: row;
`

export const CardContactEmail = styled.div `
    background-color: #11995E;
    width: 90%;
    margin: 15px auto;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
`

export const Box = styled.div `
    display: flex;
    flex-direction: column;
`

export const CardButton = styled.div `
    width: 90%;
    margin: auto;
`

export const LeaveButton = styled.button `
    width: 100%;
    color: #999999;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 20px;
    border-radius: 10px;
`

export const ShowMoreGreen = styled.button `
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #11995E;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`

export const ShowMorePurple = styled.button `
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #403CAA;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`

export const SpanGreen = styled.span `
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #11995E;
    color: white; 
    padding: 0px 5px 5px 5px;
    border-radius: 5px;
` 

export const SpanPurple = styled.span `
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #403CAA;
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
    color: #11995E;
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