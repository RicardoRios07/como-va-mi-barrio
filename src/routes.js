import NuevaDenuncia from './components/NuevaDenuncia';
import MisDenuncias from './components/MisDenuncias';
import NotFound from './components/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import Home from './components/AllDenuncias';
import NewPasswordPage from './pages/NewPasswordPage';
import verificarPage from './pages/verificarUserPage';

const routes = [
    { path: '/', component: WelcomePage, exact: true },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    {path: '/verificarCuenta', component:verificarPage},
    { path: '/home', component: HomePage, protected: true },
    { path: '/nuevaContraseña', component: NewPasswordPage},
    { path: '/denuncias', component: Home, protected: false },
    { path: '/nuevaDenuncia', component: NuevaDenuncia, protected: true }, 
    { path: '/misDenuncias', component: MisDenuncias, protected: true }, 
    { component: NotFound }, // Página de error 404
];

export default routes;