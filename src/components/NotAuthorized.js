import React from 'react';
import { Link } from 'react-router-dom';


function NotAuthorized() {
    return (
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1 style={{ fontSize: '2rem' }}>401 - No Autorizado</h1>
            <p style={{ marginBottom: '1rem' }}>Debes iniciar sesión primero para acceder a esta página.</p>
            <Link to="/login" style={{ color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>
                Ir a la página de inicio de sesión
            </Link>
        </div>
    );
}

export default NotAuthorized;