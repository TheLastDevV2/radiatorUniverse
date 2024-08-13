import React from "react";
import { Container,Tittle, MapContainer, Map} from "./style";

function ContactPage() {
    return(
        <Container>
            <MapContainer>
                <Tittle>Onde estamos?</Tittle>
            
            <Map 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.754872245757!2d-46.67233668835063!3d-23.756119178577542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4603cb6713c9%3A0xcf196d7270d5d22c!2sUniverso%20do%20Radiador%20e%20Ar%20Condicionado!5e0!3m2!1spt-BR!2sbr!4v1723536084718!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></Map>
            </MapContainer>

        </Container>
    )
}

export default ContactPage;