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
        backgroundImage: 'url("https://img.freepik.com/free-vector/flat-design-coliving-illustration_23-2150319576.jpg?w=1380&t=st=1691254255~exp=1691254855~hmac=b1e623c4aeac2477fa5126abd4eee4cf199653d1e5bcb1f767dce46ce3684e19")',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
    },
    cardContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        marginLeft: '40px',
        padding: '20px',
    },
    welcomeHeader: {
        marginBottom: '20px',
        color: '#3498db',
        fontFamily: 'Arial, sans-serif', // Cambia 'Arial' por la fuente que prefieras
        fontWeight: 'bold', // Opcional: ajusta el peso de la fuente
        fontSize: '24px', // Opcional: ajusta el tamaño de la fuente
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