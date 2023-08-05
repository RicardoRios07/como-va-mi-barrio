import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginFormForm from '../components/LoginForm'; // Asegúrate de que la ruta sea correcta

function LoginPage() {
    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <Header />
            <LoginFormForm />
            <Footer />
        </div>
    );
}

export default LoginPage;