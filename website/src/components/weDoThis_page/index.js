import React from "react";

import { MainContent, CardsList, Card } from "./style";

function  WeDoThisPage(){


    return(
        <>
    
            <MainContent>
                <h2 style={{color:"#fff"}}>Consertamos:</h2>
                <CardsList>
                    <Card>
                        Radiador
                    </Card>
                    <Card>
                        Ar condicionado
                    </Card>
                    <Card>
                        Ventoinha
                    </Card>
                    
                </CardsList>
            </MainContent>
        </>
        
    )
}



export default WeDoThisPage;