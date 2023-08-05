import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm'; // Asegúrate de que la ruta sea correcta

function RegisterPage() {
    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <Header />
            <RegisterForm />
            <Footer />
        </div>
    );
}

export default RegisterPage;