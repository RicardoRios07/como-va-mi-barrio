import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Container,
    CssBaseline,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: '0px',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0px 10px 20px 10px',
    },
    form: {
        width: '100%',
        marginTop: '8px', 
    },
    submit: {
        margin: '24px 0 16px', 
    },
});

function NewPassword() {
    const classes = useStyles();
    const [newPassword, setNewPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleNewPassword = async () => {
        if (newPassword !== confirmation) {
            setMessage('Las contraseñas no coinciden');
            return;
        }

        const resetToken = window.location.pathname.split('/').pop();

        const data = {
            newPassword: newPassword,
            resetToken: resetToken,
        };

        try {
            const response = await fetch('https://back-barrios-462cb6c76674.herokuapp.com/auth/newPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Contraseña actualizada exitosamente');
            } else {
                toast.error(result.message || 'Ha ocurrido un error');
            }
        } catch (error) {
            toast.error('Ha ocurrido un error en la solicitud');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.formContainer}>
                <Typography component="h1" variant="h5">
                    Establecer Nueva Contraseña
                </Typography>
                <div className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Nueva Contraseña"
                        type={showPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon className={classes.icon} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Confirmar Contraseña"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmation}
                        onChange={(e) => setConfirmation(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon className={classes.icon} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleNewPassword}
                    >
                        Actualizar Contraseña
                    </Button>
                </div>
                {message && <Typography variant="body2" color={message.includes('error') ? 'error' : 'inherit'}>{message}</Typography>}
            </div>
            <ToastContainer />
        </Container>
    );
}

export default NewPassword;