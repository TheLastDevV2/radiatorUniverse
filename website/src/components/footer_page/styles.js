import styled from "styled-components";


export const Footer = styled.footer`
    height: 30vh;
    background-color: #0D0D0D;
    display: flex;
    padding: 20px 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const FooterLogo = styled.img`
    min-width: 100px;
    max-width: 150px;
`
export const FooterContainer = styled.div`
 
    width: 100%;
    min-width: 300px;
    max-width: 1200px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`

export const FooterListContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 90%;
    height: 150px;
   
`

export const List = styled.ul`
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`
export const Item = styled.li`
    min-width: 70px;
    color: #fff;
    list-style: none;
`


export const TextMsg = styled.a`
  
    color: #fff;
    text-decoration: none;
`