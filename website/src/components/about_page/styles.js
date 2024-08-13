import styled from "styled-components"


export const ContentContainer = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:  #F3F4F8;
`


export const AboutContainer = styled.div`

    height: 80%;
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 10px;
    background-color:  #F3F4F8; 

`

export const AboutContent = styled.main`
    height:70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 0 20px;
    text-align: center;
`

export const Contactbutton = styled.button`
    height: 40px;
    width: 200px;
    background-color: green;
    border-radius: 12px;
    border: none;
`
export const WppLink = styled.a`
    text-decoration: none;
    color: #fff;

`
export const Text = styled.div`

`