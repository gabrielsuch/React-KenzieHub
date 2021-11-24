import styled from "styled-components"

export const Li = styled.li `
    display: flex;
    flex-direction: row;
    margin: 10px 0px;
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

export const RemoveButton = styled.button `
    width: 65px;
    height: 30px;
    padding: 5px;
    background-color: red;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`