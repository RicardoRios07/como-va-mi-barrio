import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewPassword from '../components/NewPassword';

function NewPasswordPage() {
    return (
        <div
            style={{
                position: 'relative',
                minHeight: '100vh',
                backgroundImage:'https://img.freepik.com/free-vector/flat-design-coliving-illustration_23-2150319576.jpg?w=1380&t=st=1691254255~exp=1691254855~hmac=b1e623c4aeac2477fa5126abd4eee4cf199653d1e5bcb1f767dce46ce3684e19'
            }}
        >
            <Header />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: -1,
                }}
            >
                <img
                    src="https://img.freepik.com/free-vector/flat-design-coliving-illustration_23-2150319576.jpg?w=1380&t=st=1691254255~exp=1691254855~hmac=b1e623c4aeac2477fa5126abd4eee4cf199653d1e5bcb1f767dce46ce3684e19"
                    alt="Background"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.5)', // Aplica el filtro de brillo
                    }}
                />
            </div>
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <NewPassword />
            </div>
            <Footer />
        </div>
    );
}

export default NewPasswordPage;
