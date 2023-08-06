import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';

function WelcomePage() {
    return (
        <div style={{
            position: "relative",
            backgroundColor: "#C5C5C5",
            backgroundImage:
                'url("https://img.freepik.com/free-vector/flat-design-coliving-illustration_23-2150319576.jpg?w=1380&t=st=1691254255~exp=1691254855~hmac=b1e623c4aeac2477fa5126abd4eee4cf199653d1e5bcb1f767dce46ce3684e19")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            minHeight: '100vh', // Asegura que el contenedor tenga al menos la altura completa de la ventana
        }}>
            <Header />
            <Welcome />
            <Footer />
        </div>
    );
}

export default WelcomePage;
