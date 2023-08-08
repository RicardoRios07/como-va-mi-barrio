import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { Fingerprint } from '@mui/icons-material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function RegisterForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const formData = new FormData();
        formData.append('nombreCompleto', data.get('firstName') + ' ' + data.get('lastName'));
        formData.append('cedula', data.get('cedula'));
        formData.append('numTelefono', data.get('numTelefono'));
        formData.append('email', data.get('email'));
        formData.append('password', data.get('password'));
        formData.append('photo', data.get('photo'));

        try {
            const response = await fetch('https://back-barrios-462cb6c76674.herokuapp.com/auth/register', {
                method: 'POST',
                body: formData,
            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success('Usuario registrado con éxito');
                // Redirecciona usando el componente Navigate
                return <Navigate to="/login" />;
            } else if (response.status === 400) {
                // Mostrar una notificación de error con el mensaje específico del backend para errores 400
                console.log('Mensaje de error del backend:', responseData.error);
                toast.error(responseData.error || 'Error en el registro');
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
            <Container component="main" maxWidth="sm"> {/* Cambia el maxWidth a "sm" */}
                <CssBaseline />
                <Box
                    sx={{
                        backgroundColor: '#ffffff',
                        marginTop: '120px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '20px',
                        borderRadius: '20px',
                        boxShadow: '0px 10px 20px 10px',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrarse
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombres"
                                    autoFocus
                                    InputProps={{
                                        startAdornment: (
                                            <PersonIcon sx={{ color: 'action.active', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellidos"
                                    name="lastName"
                                    autoComplete="family-name"
                                    InputProps={{
                                        startAdornment: (
                                            <PersonIcon sx={{ color: 'action.active', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="cedula"
                                    label="Cedula"
                                    name="cedula"
                                    autoComplete="off"
                                    InputProps={{
                                        startAdornment: (
                                            <Fingerprint sx={{ color: 'action.active', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="numTelefono"
                                    label="Número de Teléfono"
                                    name="numTelefono"
                                    autoComplete="off"
                                    InputProps={{
                                        startAdornment: (
                                            <ContactPhoneIcon sx={{ color: 'action.active', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo electronico"
                                    name="email"
                                    autoComplete="email"
                                    InputProps={{
                                        startAdornment: (
                                            <EmailIcon sx={{ color: 'action.active', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    InputProps={{
                                        startAdornment: (
                                            <VpnKeyIcon sx={{ color: 'action.active', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="photo"
                                    label="Foto de perfil"
                                    type="file"
                                    id="photo"
                                    accept="image/*"
                                    InputProps={{
                                        startAdornment: (
                                            <PhotoCameraIcon sx={{ color: 'action.active', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Registrarse
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    ¿Ya tienes una cuenta? Inicia sesión
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