import React from 'react';
import Banner from './banner/Banner';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './content/Container';

function Main(){
    return (
        <>
            <Header />
            <Banner />
            <Content />
            <Footer />

        </>
    );
}

export default Main;