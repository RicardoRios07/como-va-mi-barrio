import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { map } from 'lodash';
import routes from '../routes';
import NotFound from './NotFound'; 
import NotAuthorizedPage from '../pages/NotAuthorizedPage'; 

function Navigation() {
    const userHasToken = localStorage.getItem('auth-token') !== null;
    console.log('antes de if', userHasToken);

    return (
        <Router>
            <div>
                <Routes>
                    {map(routes, (route, index) => {
                        if (!route.protected || userHasToken) {
                            console.log( 'comparar',userHasToken);
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            );
                        } else {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Navigate to="/home" />}
                                />
                            );
                        }
                    })}
                    <Route path="/unauthorized" element={<NotAuthorizedPage />} /> 
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navigation;