import React from "react";
import { AboutContainer, AboutContent, ContentContainer, Contactbutton, Text, WppLink } from "./styles";


function AboutPage(){
    return (
        <>
         <ContentContainer>
            
            <AboutContainer>
                    <AboutContent>
                        <h1>+ de 15 anos de experiência</h1>
                        <Text>Somos especializados em conserto de radiadores, ventoinhas e ar condicionado</Text>
                        <Text>Trabalhamos visando o atendimento rápido e diagnostico certeiro</Text>
                        <Text>Atendemos via <a style={{color:"green"}} href="https://www.youtube.com">WhatsApp</a> e presencialmente</Text>
                        <Contactbutton>
                            <WppLink href="https://www.youtube.com" rel="noreferrer" target="_blank">
                               Quero Atendimento
                            </WppLink>
                        </Contactbutton>
                    </AboutContent>
                
            </AboutContainer>
         </ContentContainer>
        
        </>
    )
}

export default AboutPage;