import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import axios from 'axios'; // Importa Axios
const apiUrl = 'http://localhost:5000';

const useStyles = makeStyles({
    card: {
        marginBottom: '20px',
        borderRadius: '10px',
        width: '100%', 
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    cardContent: {
        fontSize: '14px',
        color: '#666',
    },
    cardImage: {
        width: '100%', 
        height: '350px',
        maxHeight: '200px',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
    },
    cardLocationLink: {
        color: '#3498db',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
});

function AllDenuncias() {
    const classes = useStyles();
    const [denuncias, setDenuncias] = useState([]);

    useEffect(() => {
        const authToken = localStorage.getItem('auth-token');
        console.log('URL DEL BACK', apiUrl);

        // Utiliza Axios para realizar la petición
        axios.get(`${apiUrl}/denuncias/getAllDenuncias/`, {
            headers: {
                'auth-token': authToken,
            },
        })
            .then(response => setDenuncias(response.data))
            .catch(error => console.error('Error obteniendo denuncias:', error));
    }, []);

    // Comprobar si denuncias no es un arreglo
    if (!Array.isArray(denuncias)) {
        return <p>No se pudo cargar las denuncias</p>;
    }

    console.log(denuncias);

    return (
            <Box>
                <Grid container spacing={2}>
                    
                    {denuncias.map(denuncia => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={denuncia._id}>
                        <Card className={classes.card}>
                            <img src={denuncia.evidencia} alt="Evidencia" className={classes.cardImage} />
                            <CardContent>
                                <Typography variant="h6" className={classes.cardTitle}>
                                    {denuncia.tituloDenuncia}
                                </Typography>
                                <Typography variant="body2" className={classes.cardContent}>
                                    <strong>Denunciante:</strong> {denuncia.nombreDenunciante}
                                </Typography>
                                <Typography variant="body2" className={classes.cardContent}>
                                    <strong>Ubicación:</strong>{' '}
                                    <a
                                        href={`https://www.google.com/maps?q=${denuncia.ubicacion}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.cardLocationLink}
                                    >
                                        Ver en Google Maps
                                    </a>
                                </Typography>
                                <Typography variant="body2" className={classes.cardContent}>
                                    <strong>Categoría:</strong> {denuncia.categoria}
                                </Typography>
                                <Typography variant="body2" className={classes.cardContent}>
                                    <strong>Estado:</strong> {denuncia.estado}
                                </Typography>
                                <Typography variant="body2" className={classes.cardContent}>
                                    <strong>Fecha y Hora:</strong> {new Date(denuncia.fechaHora).toLocaleString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default AllDenuncias;