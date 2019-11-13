import React from 'react';
import styled from 'styled-components';

import Container from 'muicss/lib/react/container';
import Cards from './Cards';

const car = require('../../assets/car.jpg')

function Footer() {
    return (
        <Styles>
            <Container>
                <Car src={car} alt="car" />
                <Container fluid={true}>
                <div id="main">
                    <div className="text-manipulation" >
                        <TextH2>Para quem está em uma road trip!</TextH2>
                    </div>
                        <div className="p-manipulation">
                            <TextP>Músicas perfeitas para aquela viagem de carro com os amigos,
                                em que o destino não é lá o mais importante.
                            </TextP>
                        </div>
                </div>
                        <TextH3>Let's go get lost!</TextH3>
                    
                    <Container fluid={true}>
                        <div className="api-manipulation">
                            <Cards />
                            <Cards />
                            <Cards />
                        </div>
                    </Container>
                </Container>
            </Container>
        </Styles>
    )
}

const Styles = styled.div`
    background-color: #EEEEEE;
    height: auto;
`;
const Car = styled.img`
    margin-top: -111px;
`;
const TextH2 = styled.h2`
    font-weight: bold;
    color: #7F7F7F;
    margin: 0 0 0 62%;
    padding: 0;
    text-align: center;

`;
const TextP = styled.p`
    text-align: start;
    margin-right: 52%;
    padding: 0;
`;
const TextH3 = styled.h3`
    font-weight: bold;
    text-align: center;
    margin: 0 0 30px 16%;
    color: #d4c9c7;
    padding: 0; 
@media (max-width: 789px){
    margin: 0 0 30px 40%;
}
@media (min-width: 999px){
    margin: 0 0 30px 23%;
}
`;

export default Footer
