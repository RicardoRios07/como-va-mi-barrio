import Home from './components/Home';
import NuevaDenuncia from './components/NuevaDenuncia';
import MisDenuncias from './components/MisDenuncias';
import NotFound from './components/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';

const routes = [
    { path: '/', component: WelcomePage, exact: true },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/home', component: Home, protected: false },
    { path: '/nuevaDenuncia', component: NuevaDenuncia, protected: true }, 
    { path: '/misDenuncias', component: MisDenuncias, protected: true }, 
    { component: NotFound }, // Página de error 404
];

export default routes;