import React from 'react';
import ReactDom from 'react-dom/client';

require ('../assets/styles/app.css');
 
console.log('Hello World Test Console');

const App = () => {
    return 
    <h1>Bonjour test</h1>;
};

const rootElement = document.querySelector('#app');
ReactDom.return(<App />, rootElement);