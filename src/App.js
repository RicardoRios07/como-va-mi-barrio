import React from 'react';
import Navigation from './components/Navigation';
const apiUrl = process.env.REACT_APP_URL_BACK;
console.log('URL DEL BACK',apiUrl);



function App() {
  return (
       <Navigation />
  );
}

export default App;
