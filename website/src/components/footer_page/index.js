import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Footer,
    FooterLogo,
    FooterContainer,
    FooterListContainer,
    List,
    Item,
    TextMsg
 } from "./styles";

import Logo from "../../assets/unLogo.jpg"

function FooterPage(){
    return (
        <>
            <Footer>
                <FooterLogo src={Logo}/>
                <FooterContainer>
                    
                    <FooterListContainer>
                        <List>
                            <Item>
                            <FontAwesomeIcon style={{color: "fff"}} icon="fa-brands fa-whatsapp" />
                                <TextMsg href="">
                                   <span style={{color: "#95A3A4"}}> WhatsApp</span>
                                 : (11) 5528-6661
                                </TextMsg>
                            </Item>
                            <Item>
                                <TextMsg href="">
                                    <span style={{color: "#95A3A4"}}> Email</span>
                                    : Universodoradiador@gmail.com
                                </TextMsg>
                            </Item>
                            <Item>
                                <TextMsg href="">
                                    <span style={{color: "#95A3A4"}}> Endereço</span>
                                    : Av. Belmira Marin. 4969 - Grajáu. São Paulo - SP CEP 04846-010
                                </TextMsg>
                            </Item>
                        </List>
                    </FooterListContainer>

               
                </FooterContainer>

            </Footer>
        
        </>
    )
}

export default FooterPage;