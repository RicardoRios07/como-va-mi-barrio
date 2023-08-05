import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotAuthorized from '../components/NotAuthorized'; 

function NotAuthorizedPage() {
    return (
        <div style={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: '#C5C5C5',
        }}>
            <Header />
            <NotAuthorized />
            <Footer />
        </div>
    );
}

export default NotAuthorizedPage;