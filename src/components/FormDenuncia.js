import React, { useState } from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Card,
    CardContent,
} from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import TitleIcon from '@mui/icons-material/Title';
import SecurityIcon from '@mui/icons-material/Security'; 
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BuildIcon from '@mui/icons-material/Build'; 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import GoogleMapComponent from './GoogleMap';
import Send from '@mui/icons-material/Send';
import DescriptionIcon from '@mui/icons-material/Description';

const FormDenuncia = () => {
    const [tituloDenuncia, setTituloDenuncia] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [evidenciaFile, setEvidenciaFile] = useState(null);
    const [ubicacion, setUbicacion] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const authToken = localStorage.getItem('auth-token'); // Obtener token del Local Storage

        const formData = new FormData();
        formData.append('tituloDenuncia', tituloDenuncia);
        formData.append('descripcion', descripcion);
        formData.append('evidencia', evidenciaFile); // Cambiar 'evidencia' por 'evidenciaFile'
        formData.append('ubicacion', ubicacion);
        formData.append('categoria', categoria);

        try {
            const response = await axios.post(
                `(${process.env.URL_BACK}/denuncias/nuevaDenuncia`,
                formData,
                {
                    headers: {
                        'auth-token': authToken, // Agregar el token como encabezado
                    },
                }
            );
            toast.success('Denuncia enviada con éxito');
            console.log('Respuesta de la API:', response.data);
        } catch (error) {
            if (error.response) {
                // Error response from the server
                const errorMessage = error.response.data || 'Error al enviar la denuncia';
                console.log(error.response.data);
                toast.error(error.response.data);
            } else if (error.request) {
                // Request made, but no response received
                toast.error('Error de conexión. Inténtalo nuevamente.');
            } else {
                // Something else went wrong
                toast.error('Ocurrió un error. Inténtalo nuevamente más tarde.');
            }
            console.error('Error al enviar la denuncia:', error);
        }
    };


    return (
        <Card>
            <CardContent>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        label="Título de la denuncia"
                        value={tituloDenuncia}
                        onChange={(e) => setTituloDenuncia(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <TitleIcon sx={{ color: 'action.active', mr: 1 }} />
                            ),
                        }}
                    />
                    <TextField
                        label="Descripción"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                        required
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <DescriptionIcon sx={{ color: 'action.active', mr: 1 }} />
                            ),
                        }}
                    />
                    <TextField
                        fullWidth
                        name="evidencia"
                        label="Añade una foto de evidencia"
                        type="file"
                        id="evidencia"
                        accept="image/*"
                        InputProps={{
                            startAdornment: (
                                <PhotoCameraIcon sx={{ color: 'action.active', mr: 1 }} />
                            ),
                        }}
                        onChange={(e) => setEvidenciaFile(e.target.files[0])}
                    />
                    <h5>Envía tu Ubicación: </h5>
                    <GoogleMapComponent setUbicacion={setUbicacion} />
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>Categoría</InputLabel>
                        <Select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <MenuItem value="Seguridad">
                                <SecurityIcon /> Seguridad
                            </MenuItem>
                            <MenuItem value="Infraestructura">
                                <BuildIcon /> Infraestructura
                            </MenuItem>
                            <MenuItem value="Contaminacion">
                                <DeleteOutlineIcon /> Contaminación
                            </MenuItem>
                            <MenuItem value="Ruido">
                                <VolumeUpIcon /> Ruido
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">
                        <Send /> Enviar Denuncia
                    </Button>
                </form>
                <ToastContainer position="top-center" autoClose={5000} />
            </CardContent>
        </Card>
    );
};

export default FormDenuncia;