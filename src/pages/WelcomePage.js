import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";

function WelcomePage() {
    return (
        <div style={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: '#C5C5C5',
        }}
        >
            <Header/>
            <Welcome />
            <Footer />
        </div>
    );
}

export default WelcomePage;