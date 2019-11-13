import React from 'react'
import styled from 'styled-components';

const bannerImage = require('../../assets/banner.jpg')

function Banner() {
    return (
        <Styles>
            <Logo src={bannerImage} alt="logo"></Logo>
        </Styles>
    )
}



const Styles = styled.div``;

const Logo = styled.img`
    width: 100%;
    display: flex;
`;

export default Banner
