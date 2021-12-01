import React from 'react';
import isoFetch from 'isomorphic-fetch';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  constructor(props) {
    super(props);
    // this.loadData();
    // не надо запускать асинхронные или долгие операции из конструктора
    // конструктор инициализирует только КЛАСС, это ещё не React-компонент
    // конструктор должен быть лёгким и быстрым
  }


// ---------------------- 1 ---------------------- //
/* в componentDidMount делаем запрос на загрузку данных */
  componentDidMount() {
    this.loadData();
  }

  state = {
    dataReady: false,
    name: "???",
    clients: [],
  };

// ---------------------- 3 ---------------------- //
/* ошибка при загрузке данных */
  fetchError = (errorMessage) => {
    console.error(showStr);
  };

// ---------------------- 3 ---------------------- //
/* полученные данные кладем в state */
  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    this.setState({
      dataReady:true,
      name:loadedData.companyName,
      clients:loadedData.clientsArr,
    });
  };


// ---------------------- 2 ---------------------- //
/* функция загрузки данных */
  loadData = () => {

    isoFetch("http://fe.it-academy.by/TestFetch.php", { //весь этот вызов isoFetch возвращает промис, который потом зарезолвится в те данные которые нам нужны
        method: 'post',
        headers: {
            "Accept": "application/json", // заголовок, зависит от реализации backend части 
        },
    })

        // когда промис зарезолвится выполнить эту функцию
        // response - результат isoFetch api резовниться не в чисто те данные которые нам нужны, это HTTP ответ 
        // там также есть код ответа(404 200 500), заголовок...
        .then( response => { // response - HTTP-ответ
            if (!response.ok) //.ok значит ответ есть, нет ошибки
                throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
            else
                return response.json(); // response.json() - данные достатые из HTTP-ответа, дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then( data => {
            this.fetchSuccess(data); // data- нажные данные, передаём нужные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
        })
        .catch( error => {
            this.fetchError(error.message);
        })
    ;

  };

  render() {

    if ( !this.state.dataReady )
      return <div>загрузка данных...</div>;

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
      </div>
    )
    ;

  }

}

export default MobileCompany;
