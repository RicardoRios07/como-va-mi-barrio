import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import verificarCuenta from '../components/verificarUser';

function verificarPage (){
    return (
        <div>
    <Header />
    <verificarCuenta />
    <Footer />
    </div>
    );
}

export default verificarPage;