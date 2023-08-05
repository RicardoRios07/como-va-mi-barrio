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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="">
                ¿Cómo va mi barrio?
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const defaultTheme = createTheme();

export default function LoginForm() {
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
                // Manejar el éxito
                const token = responseData.token;
                // Guardar el token en localStorage o en el estado, según tu preferencia
                localStorage.setItem('auth-token', token);
                // Mostrar una notificación de éxito
                toast.success('Inicio de sesión exitoso');
            } else {
                // Mostrar una notificación de error con el mensaje del backend
                toast.error(responseData.message || 'Error en el inicio de sesión');
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
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
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
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
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