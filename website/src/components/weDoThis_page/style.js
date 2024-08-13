import styled from "styled-components";

export const MainContent = styled.div`
    height: 35vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #0D0D0D;
`

export const CardsList = styled.div`
    height: 70%;
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`


export const Card = styled.div`
    width: 200px;
    color: #fff;
    height: 100px;
    background-color: #65736F;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

