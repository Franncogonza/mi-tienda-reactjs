import React from 'react';
import ReactDom from 'react-dom';
import NavBar from "./components/NavBar";

import  './index.css';

const divRoot = document.querySelector('#root');

ReactDom.render( <NavBar />  , divRoot);
