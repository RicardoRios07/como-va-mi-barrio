import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { map } from 'lodash';
import routes from '../routes';
import NotFound from './NotFound'; 
import NotAuthorizedPage from '../pages/NotAuthorizedPage'; 

function Navigation() {
    const userHasToken = localStorage.getItem('auth-token') !== null;

    return (
        <Router>
            <div style={{ marginBottom: '50px' }}>
                <Routes>
                    {map(routes, (route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                !route.protected || userHasToken ? (
                                    <route.component />
                                ) : (
                                    <Navigate to="/unauthorized" /> 
                                )
                            }
                        />
                    ))}
                    <Route path="/unauthorized" element={<NotAuthorizedPage />} /> 
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navigation;
