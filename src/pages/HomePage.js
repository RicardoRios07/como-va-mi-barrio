import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import MainMenu from "../components/MainMenu";
function HomePage() {
    return (
        <div style={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: '#C5C5C5',
        }}
        >
            {/* <Header/> */}
            <MainMenu />
            {/* <Home /> */}
            <Footer />
        </div>
    );
}

export default HomePage;