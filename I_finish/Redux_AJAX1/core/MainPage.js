import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// createStore - создаем Redax

import combinedReducer from '../redux/reducers.js';
import CountriesList from '../core/CountriesList';

let store=createStore(combinedReducer);
// Redux создай store которым управляет этот reducer - combinedReducer(который в себе объединяет все reduserы)

class MainPage extends React.PureComponent {

  render() {

    return (
      <Provider store={store}>
      {/* Provider - import { Provider } from 'react-redux'; 
      всё свое приложения мы заварачиваем в tag Provider
      тег Provider говорит, что для всего кода, который внутри будет работать Redux с хранилищем store
      */}
          <div>
              <h1>Страны</h1>
              <CountriesList />
          </div>
      </Provider>
    );

  }

}

export default MainPage;
