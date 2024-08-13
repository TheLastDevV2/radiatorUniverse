import React from "react";
import "./animation.css"
import Logo from "../../assets/unLogo.jpg"

import { StartContainer, 
    TextCfgs, 
    AppHeader, 
    HeaderContent,
    Content,
    ContactBtn,
    Logo1,
    Arrows,
    ContactLink

    } from "./styles";


function InitPage() {

    return (
        <>

        <StartContainer>
            <AppHeader>
                <HeaderContent> 
                    Av. Belmira  Marin. 4969 - Grajáu. São Paulo - SP CEP 04846-010                
                </HeaderContent>
            </AppHeader>
            <Content>
          
             
                <Logo1  src={Logo}/>
                    <TextCfgs>Conserto de  <b>radiadores e ar condicionado</b></TextCfgs>               
            
                <ContactBtn>
                    <ContactLink href="https://www.youtube.com" rel="noreferrer" target="_blank">
                        Falar com especialista
                    </ContactLink>
                </ContactBtn>
            </Content>

            <Arrows className="arrows" >
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </Arrows>
        </StartContainer>
    
        </>
        
    )
}

export default InitPage;