import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
    return (
        <div style={{ backgroundColor: '#C5C5C5' }}>
            <Header />
            <div style={{ marginTop: '100px' }}>
                {/* Agrega un margen en la parte superior para dejar espacio para el Header */}
                <RegisterForm />
                <Footer />
            </div>
        </div>
    );
}

export default RegisterPage;