import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
    return (
        <div
            style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh',
            }}
        >
            <Header style={{ marginTop: '100px', marginBottom: '0px' }} />
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    backgroundImage: 'url("https://img.freepik.com/free-vector/flat-design-coliving-illustration_23-2150319576.jpg?w=1380&t=st=1691254255~exp=1691254855~hmac=b1e623c4aeac2477fa5126abd4eee4cf199653d1e5bcb1f767dce46ce3684e19")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: '-1',
                    filter: 'brightness(0.5)',
                }}
            ></div>
            <RegisterForm />
            <Footer />
        </div>
    );
}

export default RegisterPage;