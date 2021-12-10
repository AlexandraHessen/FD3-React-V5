import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_About from './Page_About';
import Page_Company from './Page_Company';
import Page_Clients from './Page_Clients';
import Page_Client from './Page_Client';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_About} />
        <Route path="/company" component={Page_Company} />
        <Route path="/clients" component={Page_Clients} />
        <Route path="/client/:clid" component={Page_Client} />
        {/* Page_Client в props получит под именем param то что было в URL после /слеша
        т.е. например код клиента и отрендарит этого клиента */}
      </div>
    );
    
  }

}
    
export default PagesRouter;
    