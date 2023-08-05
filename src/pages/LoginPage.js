import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm'; // Asegúrate de que la ruta sea correcta

function LoginPage() {
    return (
<div
            style={{
                minHeight: '100vh',
                position: 'relative',
                backgroundColor: '#C5C5C5',
                marginTop: '100px',
            }}
        >
            <Header style={{ marginTop: '100px' }}/>
            <LoginForm />
            <Footer />
        </div>
    );
}

export default LoginPage;