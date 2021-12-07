import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    companyData: PropTypes.object.isRequired,
    // пишем в компоненте  companyData как обычно, хотя данные придут позже чем отрендарится этот компонент
    // потому что наш HOC по загрузке дынных позаботиться о том чтобы вообще не рендарить компонент пока не придут данные
  };

  render() {

    var clientsCode=this.props.companyData.clientsArr.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <div className='MobileCompanyName'>Компания &laquo;{this.props.companyData.companyName}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
      </div>
    )
    ;

  }

}

export default MobileCompany;
