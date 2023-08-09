import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VerificarCuenta from '../components/verificarUser';

function verificarUserPage (){
    return (
        <div>
    <Header />
    <VerificarCuenta />
    <Footer />
    </div>
    );
}

export default verificarUserPage;