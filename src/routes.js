import Home from './pages/Home';
import NuevaDenuncia from './pages/NuevaDenuncia';
import MisDenuncias from './pages/MisDenuncias';
import NotFound from './pages/NotFound';
import Forbidden from './pages/Forbidden';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const routes = [
    { path: '/', component: Home, exact: true },
    {path: '/login', component: LoginPage},
    {path: '/register', component: RegisterPage},
    { path: '/nuevaDenuncia', component: NuevaDenuncia },
    { path: '/misDenuncias', component: MisDenuncias },
    { path: '/forbidden', component: Forbidden },
    { component: NotFound },
];

export default routes;