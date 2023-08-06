import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import {Facebook, GitHub, Language} from '@mui/icons-material';

const footerStyles = {
    color:'black',
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "50px", // Ajusta la altura del footer
    display: "flex",
    alignItems: "center",
};

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                ...footerStyles,
            }}
            component="footer"
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        <Link color="inherit" href="/login">
                            ¿Cómo va mi barrio? 
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Link href="https://www.facebook.com/comovamibarrio1?mibextid=ZbWKwL" target="_blank" rel="noopener">
                            <Facebook sx={{ fontSize: 20, mx: 1 }} />
                        </Link>
                        <Link href="https://back-barrios-462cb6c76674.herokuapp.com/api-docs/#/" target="_blank" rel="noopener">
                            <GitHub sx={{ fontSize: 20, mx: 1 }} />
                        </Link>
                        <Link href="https://www.uide.edu.ec" target="_blank" rel="noopener">
                            <Language sx={{ fontSize: 20, mx: 1 }} />
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}