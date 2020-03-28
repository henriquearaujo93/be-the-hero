import React from 'react';
import ReactDOM from 'react-dom'; //Integração do react com o DOm
import App from './App'; //Importar o app.js

//Componente - Função que retorna html;
//Renderizar o <App/> dentro da div com id="root" 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
