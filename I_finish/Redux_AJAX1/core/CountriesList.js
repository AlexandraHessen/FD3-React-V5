import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';

import { countriesLoadingAC, countriesErrorAC, countriesSetAC } from "../redux/countriesAC";

class CountriesList extends React.PureComponent {

  static propTypes = {
    countries: PropTypes.object.isRequired,
  };

  componentDidMount() {

    this.props.dispatch( countriesLoadingAC() ); // переводим раздел countries стора в состояние "загружается"
    // значит this.props.dispatch( { type:"COUNTER_BUTTON_ADD" } );
    // мы вызываем функцию из файла с экшенами (countriesAC) которая возвращает такой хэш
    //  {    type:"COUNTER_BUTTON_ADD"}

    // отправляем AJAX запрос
    isoFetch("http://fe.it-academy.by/Examples/net_city/countries.json")
    // isoFetch - работает с промисами
    // запросить json по ссылке
    // когда будет решен промис выполнить .then...
        .then( (response) => { // response - HTTP-ответ
            if (!response.ok) {
                let Err=new Error("fetch error " + response.status);
                Err.userMessage="Ошибка связи";
                throw Err;
            }
            else
                return response.json();
        })
        .then( (data) => { //когда данные хорошо загружены
            this.props.dispatch( countriesSetAC(data.rows) );
            // значит this.props.dispatch( { type: COUNTRIES_SET } );
            // мы вызываем функцию из файла с экшенами (countriesAC) которая возвращает такой хэш
            // {
            //   type: COUNTRIES_SET,
            //   countries:countries, //передаем загруженные данные
            // };
        })
        .catch( (error) => {
            console.error(error);
            this.props.dispatch( countriesErrorAC() ); // переводим раздел countries стора в состояние "ошибка"
          })
    ;

  }

  render() {

    if ( this.props.countries.status<=1 )
      return "загрузка...";

    if ( this.props.countries.status===2 )
      return "ошибка загрузки данных";


    // if ( this.props.countries.status===3 )
    // все хорошо данные загружены
    return (
      <ul>
        {
          this.props.countries.data.map( (countryInfo,index) => <li key={index}>{countryInfo[1]}</li> )
          // this.props.countries / весь раздел Redux даступный нам на который мы подписались через connect(mapStateToProps)
          // this.props.countries.data - список стран 
        }
      </ul>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    // весь раздел Redux state под именем counters будет доступен
    // данному компоненту как this.props.counters
    // это значит что в this.props.countries нам доспун хэш из countriesReducer
    // { status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
    //    data: null, }
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(CountriesList);
// connect(mapStateToProps) - значит подписан на redux 
