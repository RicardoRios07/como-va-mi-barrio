import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { map } from 'lodash';
import routes from '../routes';

function Navigation() {
    return (
        <Router>
            <div style={{ marginBottom: '50px' }}> {/* Añade margen inferior */}
                <Routes>
                    {map(routes, (route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default Navigation;