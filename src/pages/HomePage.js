import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/AllDenuncias";
import MainMenu from "../components/MainMenu";


const HomePage = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            <div
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-vector/flat-design-coliving-illustration_23-2150319576.jpg?w=1380&t=st=1691254255~exp=1691254855~hmac=b1e623c4aeac2477fa5126abd4eee4cf199653d1e5bcb1f767dce46ce3684e19")',
                    backgroundSize: 'cover',
                    filter: 'brightness(0.5)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1, // Asegura que la imagen esté detrás de los demás contenidos
                }}
            />
            {/* <Header /> */}
            <MainMenu />
            <Home /> 
            <Footer />
        </div>
    );
}

export default HomePage;
