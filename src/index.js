import React from 'react';
import ReactDOM from 'react-dom/client';
// import {    BrowserRouter,    Routes,    Route } from "react-router-dom";
import './styles/index.scss';
import App from './App';
// import AppEdit from "./AppEdit";
// import App404 from "./App404";



import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(document.getElementById('root'));
root.render( // Тут когда-то была идея использовать router dom, но не получилось не фортануло не повезло, когда нибудь этот участок кода будет переделан, но не сегодня.
    // <BrowserRouter>
    //     <Routes>
    //         <Route path='/' element={ <App /> } />
    //         {/*<Route path='/edit' element={ <AppEdit /> } />*/}
    //     </Routes>
    // </BrowserRouter>
    <App/>
);

