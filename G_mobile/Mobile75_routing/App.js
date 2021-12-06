"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

ReactDOM.render( 
  <BrowserRouter> 
    <div>
      <PagesLinks /> {/* есть всегда, навигация страниц  */}
      <PagesRouter /> {/* все остальное, то что изменяется и зависить от URL  */}
    </div>
  </BrowserRouter>
, document.getElementById('container') );
