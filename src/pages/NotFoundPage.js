import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";

function NotFoundPage() {
    return (
        <div style={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: '#C5C5C5',
        }}
        >
            <Header />
            <NotFound />
            <Footer />
        </div>
    );
}

export default NotFoundPage;