import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import verificarUser from '../components/verificarUser';

function verificarPage (){
    return (
        <div>
    <Header />
    <verificarUser verificationToken="" />
    <Footer />
    </div>
    );
}

export default verificarPage;