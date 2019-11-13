import React from 'react';
import styled from 'styled-components';

import Container from 'muicss/lib/react/container';

function Content() {
    return (
        <Styles>
            <Container>
                <Divider>
                    <TextH3 className="text-h3">Já falamos aqui sobre como ouvir música em inglês
                        pode ajudar você nos estudos do idioma.</TextH3>
                        <TextP className="text-p">Hoje algumas sugestões que não só te fazem praticar
                            um pouco do inglês, mas também tornar as viagens muito mais divertidas.</TextP> 

                    <TextH2 className="text-h2">APERTE O CINTO E PREPARE A PLAYLIST</TextH2>
                        <Hr></Hr>
                </Divider>
            </Container>
        </Styles>
    )
}

const Styles = styled.div`
    margin: 0;
    padding: 0;
    background-color: #fff;
`;
const TextH3 = styled.h3`
    padding: 0;
    font-size: 24px;
    color: #645D5C;
`;
const TextP = styled.p`
    font-size: 12px;
    padding: 8px;
    margin: 0 14% 0 14%;
`;
const TextH2 = styled.h2`
    font-weight: bold;
    color: #43B8D3;
`;
const Divider = styled.div`
    align-items: center;
    justify-content: center;
    display: grid;
    margin: 0 25% 0 25%;
    flex-wrap: wrap;

`;
const Hr = styled.hr`
    justify-content: stretch;
    height: 3px;
    width: 40%;
    align-self: center;
    background-color: #43B8D3;
    margin-bottom: 220px;
`;
export default Content
