﻿import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    fio: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = {
    balance: this.props.balance,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({balance:newProps.balance});
  };

  shouldComponentUpdate = (newProps,newState) => {
    // ------- Прошлый код -------//
    // return (newProps.fio!=this.props.fio)||(newState.balance!=this.state.balance);

    // // если новое не равно старому возыращается true 
    // // т.е. компоненту надо перерисовываться? - true

    let oldActive=this.state.balance>=0;
    let newActive=newState.balance>=0;
    return (newProps.fio!=this.props.fio)||(oldActive!=newActive);

  };

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <div className='MobileClient'>
        {
          (this.state.balance>=0)
          ?<span className='MobileClientBalance MobileClientBalanceActive'>аккаунт активен</span>
          :<span className='MobileClientBalance MobileClientBalanceBlocked'>аккаунт блокирован</span>
        }
        <span className='MobileClientFIO'>{this.props.fio}</span>
      </div>
    );

  }

}

export default MobileClient;
