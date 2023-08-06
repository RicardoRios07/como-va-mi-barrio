import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
function HomePage() {
    return (
        <div style={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: '#C5C5C5',
        }}
        >
            <Header/>
            <Home />
            <Footer />
        </div>
    );
}

export default HomePage;