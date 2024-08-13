import {styled} from "styled-components"
import bg from "../../assets/part1/background.jpg"
export const StartContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url(${bg});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 10px;
`

export const TextCfgs = styled.div`
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
`

export const AppHeader = styled.header`

`

export const HeaderContent = styled.div`
    text-align: center;
    color: #f1f1f1;
`

export const Content = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`

export const ContactBtn = styled.button`

    width: 250px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: solid 1px #c1c1c1;
    background-color: #05054b;
    
`
export const Logo1 = styled.img`
    width: 250px;

`
export const Arrows = styled.svg`
    width: 60px;
    height: 172px;
    bottom: 20px;
`

export const ContactLink = styled.a`
    color: #fff;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 40px;
    list-style: none;
    text-decoration: none;

`
