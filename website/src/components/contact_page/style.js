 import styled from "styled-components";




 export const Container  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
 `

 export const Tittle = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
 `

 export const MapContainer = styled.div`
    width: 60%;
    min-width: 350px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
 
 
 `

export const Map = styled.iframe`
    width: 50%;
    min-width: 300px;
    max-width: 600px;
    height: 500px;
    border: #f1f1f1;
`