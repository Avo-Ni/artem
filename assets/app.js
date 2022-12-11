import React from "react";
import ReactDOM from "react-dom";

require ("../assets/styles/app.css");

console.log("Hello World");

const App = () => {
    return 
    <H1>Bonjour</H1>;
};

const rootElement = document.querySelector('#app');
ReactDOM.createRoot(<App/>, rootElement);