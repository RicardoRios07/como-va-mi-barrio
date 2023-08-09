import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';

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

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



function EliminarDenuncias() {
    const classes = useStyles();
    const [denuncias, setDenuncias] = useState([]);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
	
	const handleDelete = (_id) => {
		fetch(`https://back-barrios-462cb6c76674.herokuapp.com/admin/deleteDenuncia/${_id}`, {
			method: 'DELETE',
		})
    .then(response => response.json())
    .then(data => {
        // Actualiza el estado de las denuncias eliminando la que corresponde
        setDenuncias(prevDenuncias => prevDenuncias.filter(denuncia => denuncia._id !== _id));
    })
    .catch(error => console.error('Error deleting denuncia:', error));
};

useEffect(() => {
    const authToken = localStorage.getItem('auth-token'); // Obtener token del Local Storage

    fetch('https://back-barrios-462cb6c76674.herokuapp.com/denuncias/getDenunciasUser', {
        headers: {
            'auth-token': authToken, // Agregar el token como encabezado
        },
    })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                setDenuncias(data);
            } else {
                console.error('Datos de denuncias no válidos:', data);
            }
        })
        .catch(error => console.error('Error fetching denuncias:', error));
}, []);


    return (
        <Box>
            <Grid container spacing={2}>
                {denuncias.map(data => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={data._id}> {/* Ajusta las columnas según el tamaño de la pantalla */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        U
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        {/* <MoreVertIcon /> */}
                                    </IconButton>
                                }
                                title={data.tituloDenuncia}

                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={data.evidencia}
                                title="evidencia"
                            />
                            <CardContent>
                                <Typography>
                                    <strong>Denunciante:</strong> {data.nombreDenunciante}
                                </Typography>
                                <Typography>
                                    <strong>Ubicación:</strong>{' '}
                                    <a
                                        href={`https://www.google.com/maps?q=${data.ubicacion}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.cardLocationLink}
                                    >
                                        Ver en Google Maps
                                    </a>
                                </Typography>
                                <Typography variant="body2" className={classes.cardContent}>
                                    <strong>Categoría:</strong> {data.categoria}
                                </Typography>
                                <Typography variant="body2" className={classes.cardContent}>
                                    <strong>Estado:</strong> {data.estado}
                                </Typography>
                                <Typography variant="body2" className={classes.cardContent}>
                                    <strong>Fecha y Hora:</strong> {new Date(data.fechaHora).toLocaleString()}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites"> 
                                    <RestoreFromTrashIcon />
                                </IconButton>
								 <IconButton aria-label="delete" onClick={() => handleDelete(data._id)}>
									<DeleteIcon />
								</IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse key={data._id} in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Detalles:</Typography>

                                    <Typography>
                                       <p>{data.descripcion}</p>
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default EliminarDenuncias;