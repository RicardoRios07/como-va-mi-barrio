import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try {
            const response = await fetch('https://back-barrios-462cb6c76674.herokuapp.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.get('email'),
                    password: data.get('password'),
                }),
            });

            const responseData = await response.json();
            if (response.ok) {
                const token = responseData.data.token;
                localStorage.setItem('auth-token', token);
                toast.success('Inicio de sesión exitoso');
                navigate('/home'); // Redirige usando useNavigate
            } else if (response.status === 400) {
                // Mostrar una notificación de error con el mensaje específico del backend para errores 400
                console.log('Mensaje de error del backend:', responseData.error);
                toast.error(responseData.error || 'Error en el inicio de sesión');
            } else {
                // Mostrar una notificación de error genérico para otros errores
                toast.error('Error en el registro');
            }
        } catch (error) {
            console.error('Error en la petición:', error);
            // Mostrar una notificación de error genérico
            toast.error('Error en el servidor');
        }
    };



    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        backgroundColor: '#ffffff', // Cambia el color según tus preferencias
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '20px', // Agrega espacio interno para que el contenido no quede pegado al borde
                        borderRadius: '20px', // Añade bordes redondeados
                        boxShadow:'0px 10px 20px 10px',
                        marginTop:'180px'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar Sesión
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo electronico"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            InputProps={{
                                startAdornment: (
                                    <EmailIcon sx={{ color: 'action.active', mr: 1 }} />
                                ),
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                startAdornment: (
                                    <VpnKeyIcon sx={{ color: 'action.active', mr: 1 }} />
                                ),
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Iniciar Sesión
                        </Button>
                        <Grid container direction="column">
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    <HelpOutlineIcon sx={{ mr: 1 }} />
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    <HowToRegIcon sx={{ mr: 1 }} />
                                    {"No tienes una cuenta? Registrate"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <ToastContainer></ToastContainer>
        </ThemeProvider>
    );
}






