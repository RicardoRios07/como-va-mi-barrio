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
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';

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
                    <img src='https://res.cloudinary.com/drwhn0ldb/image/upload/v1691288547/pocj8i7ftk6hryiht6ow.png' alt="Logo de la aplicación" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
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
                                startIcon={<HomeIcon />}
                                sx={{ color: 'inherit', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}
                            >
                                Inicio
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button
                                component="a"
                                href="/register"
                                variant="outlined"
                                startIcon={<PersonAddIcon />}
                                sx={{ color: 'inherit', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}
                            >
                                Registrarse
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Button
                                component="a"
                                href="/login"
                                variant="outlined"
                                startIcon={<LoginIcon />}
                                sx={{ color: 'inherit', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}
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
                        color='success'
                        startIcon={<HomeIcon sx={{ fontSize: 20 }} />}
                        sx={{ my: 2, color: 'white', display: 'flex', width: '170px', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', marginRight: '10px' }}
                    >
                        Inicio
                    </Button>
                    <Button
                        component="a"
                        href="/register"
                        variant="contained"
                        color='success'
                        startIcon={<PersonAddIcon sx={{ fontSize: 20 }} />}
                        sx={{ my: 2, color: 'white', display: 'flex', width: '170px', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', marginRight: '10px' }}
                    >
                        Registrarse
                    </Button>
                    <Button
                        component="a"
                        href="/login"
                        variant="contained"
                        color='success'
                        startIcon={<LoginIcon sx={{ fontSize: 20 }} />}
                        sx={{ my: 2, color: 'white', display: 'flex', width: '170px', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}
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
