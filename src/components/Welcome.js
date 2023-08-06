import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    welcomeContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
    },
    filteredBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: -1,
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 10px 20px 10px',
        marginLeft: '40px',
        padding: '20px',
        position: 'relative',
        alignItems:'left',
        zIndex: 1, // Aumenta el valor del zIndex para que la card se muestre por encima del fondo

    },
    welcomeHeader: {
        marginBottom: '20px',
        color: '#3498db',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '24px',
        
    },
    welcomeText: {
        marginBottom: '20px',
    },
    '@media (max-width: 600px)': {
        welcomeContainer: {
            justifyContent: 'center',
        },
        cardContainer: {
            marginLeft: 0,
        },
    },
});

function Welcome() {
    const classes = useStyles();

    return (
        <Box className={classes.welcomeContainer}>
            <div className={classes.filteredBackground}></div>
            <Card className={classes.cardContainer}>
                <CardContent>
                    <Typography variant="h4" className={classes.welcomeHeader}>
                        ¡Bienvenido a "¿Cómo va mi barrio?"!
                    </Typography>
                    <Typography variant="body1" className={classes.welcomeText}>
                        En nuestra plataforma, te brindamos la oportunidad de hacer una diferencia en tu comunidad. Si eres residente de Loja, Ecuador, aquí puedes denunciar problemas y compartir información sobre tu barrio.
                    </Typography>
                    <Typography variant="body1" className={classes.welcomeText}>
                        ¿Tienes un bache en tu calle que necesita ser arreglado? ¿Un poste de luz que no funciona? ¿Algún problema de seguridad que deba ser atendido? ¡Este es el lugar para hacerlo!
                    </Typography>
                    <Typography variant="body1" className={classes.welcomeText}>
                        Únete a nosotros para mejorar juntos nuestra comunidad. ¡Explora, denuncia y contribuye al bienestar de tu barrio!
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Welcome;
