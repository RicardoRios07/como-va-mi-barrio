import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Alert, AlertTitle } from '@mui/material';
import axios from 'axios';

const VerificarCuenta = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        await axios.post(`https://back-barrios-462cb6c76674.herokuapp.com/auth/verifyUser/${token}`);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.error || 'Error al verificar la cuenta');
        setLoading(false);
      }
    };

    verifyAccount();
  }, [token]);

  return (
    <Container maxWidth="md">
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <Alert severity="success">
          <AlertTitle>Cuenta verificada</AlertTitle>
          ¡Tu cuenta ha sido verificada correctamente!
        </Alert>
      )}
    </Container>
  );
};

export default VerificarCuenta;