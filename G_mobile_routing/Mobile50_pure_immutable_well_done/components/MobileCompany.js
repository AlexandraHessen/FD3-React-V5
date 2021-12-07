import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  /*
  setBalance = (clientId,newBalance) => {
    let newClients=[...this.state.clients]; // копия массива клиентов
    // ...  поверхностная копия (только массив элементов(ссылки на хэши)сами хэши не копировались)
    newClients.forEach( (c,i) => {  
      // if ( c.id==clientId ) { // 1. находим изменненного клиенты 

      if ( c.id==clientId && c.balance!=newBalance ) { // 1. находим изменненного клиенты 

        let newClient={...c}; // 2. копируем объект изменненного клиенты 
        newClient.balance=newBalance; // 3. заменяем баланс изменненного клиента на измененный баланс
        newClients[i]=newClient; // 4. заменяем в массиве копии клиентов, клиента на нового такого клиента с измененным балансом
      }
    } );
    this.setState({clients:newClients});
  };
  */


  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия массива клиентов // ...  поверхностная копия (только массив элементов(ссылки на хэши)сами хэши не копировались)
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) { // 1. находим изменненного клиенты 
        let newClient={...c}; // 2. копируем объект изменненного клиенты 
        newClient.balance=newBalance;// 3. заменяем баланс копии изменненного клиента на измененный баланс
        newClients[i]=newClient;// 4. заменяем в массиве копии клиентов, клиента на нового такого клиента с измененным балансом
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };

  
  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
        <input type="button" value="Сидоров=250" onClick={this.setBalance2} />
      </div>
    )
    ;

  }

}

export default MobileCompany;
