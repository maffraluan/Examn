import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <MainHeader>
                <Text>Voltar para a página principal</Text>
        </MainHeader>
    )
}
const MainHeader = styled.div`
    display: flex;
    height: 30px;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #ACD956;
    justify-content: flex-end;
`;
const Text = styled.p`
    justify-content: center;
    position: relative;
    color: #000;
    margin: 0 60px 0 0;
    padding: 0;
`;

export default Header
