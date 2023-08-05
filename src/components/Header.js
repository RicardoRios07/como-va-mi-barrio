import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../LOGO-BARRIO.png';

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Logo} alt="Logo de la aplicación" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                    <Typography variant="h4" style={{ fontFamily: 'Rockwell' }}>¿Cómo va mi barrio?</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        {/* Agregar elementos del menú aquí */}
                        <MenuItem>
                            <Button
                                component="a"
                                href="/"
                                variant="outlined"
                                sx={{ color: 'inherit', width: '100%' }}
                            >
                                Inicio
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button
                                component="a"
                                href="/register"
                                variant="outlined"
                                sx={{ color: 'inherit', width: '100%' }}
                            >
                                Registrarse
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button
                                component="a"
                                href="/login"
                                variant="outlined"
                                sx={{ color: 'inherit', width: '100%' }}
                            >
                                Iniciar Sesión
                            </Button>
                        </MenuItem>
                    </Menu>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        component="a"
                        href="/"
                        variant="contained"
                        color='primary'
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Inicio
                    </Button>
                    <Button
                        component="a"
                        href="/register"
                        variant="contained"
                        color='primary'
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Registrarse
                    </Button>
                    <Button
                        component="a"
                        href="/login"
                        variant="contained"
                        color='primary'
                        sx={{ my: 2, color: 'white', display: 'block' }} // Añade esta línea
                    >
                        Iniciar Sesión
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Botones y menú de usuario */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {/* Elementos del menú de usuario */}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;