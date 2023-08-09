import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, CircularProgress, Box } from '@mui/material';

function VerificarUser({ verificationToken }) {
  const [verificationStatus, setVerificationStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.post('https://back-barrios-462cb6c76674.herokuapp.com/auth/verifyUser', {
          verificationToken: verificationToken
        });

        // Actualizar el estado con el resultado de la verificación
        setVerificationStatus(response.data.message);
      } catch (error) {
        console.error('Error al verificar el usuario:', error);
        setVerificationStatus('Error al verificar el usuario');
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [verificationToken]);

  return (
    <Box textAlign="center" p={3}>
      <Typography variant="h4" gutterBottom>
        Verificación de Usuario
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="body1">{verificationStatus}</Typography>
      )}
    </Box>
  );
}

export default VerificarUser;
