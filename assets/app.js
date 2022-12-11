import React from 'react';
import ReactDOM from 'react-dom';

require("../styles/app.css");

const App = () =>{
    return
    <h1>Bonjour coucou</h1>;
};


const rootElement = document.querySelector('#app');
ReactDOM.render(<App/>);