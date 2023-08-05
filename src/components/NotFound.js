import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Footer from './Footer';
import Header from './Header';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <Header />
            <Typography variant="h1" color="primary" gutterBottom>
                404
            </Typography>
            <Typography variant="h4" color="textSecondary">
                Página no encontrada
            </Typography>
            <Link to="/" style={{ color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>
                Ir a la página de inicio
            </Link>
            <Footer />
        </div>
    );
};

export default NotFound;