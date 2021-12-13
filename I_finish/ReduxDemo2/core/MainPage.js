import React from 'react';
import { Provider } from 'react-redux';
//оборачиваем все приложение теги
import { createStore } from 'redux';
//создаем store и привязываем его к редуюсеру

import combinedReducer from '../redux/reducers.js';
//combinedReducer файл со всеми редьсерами
import CounterButton from '../components/CounterButton/CounterButton';

let store=createStore(combinedReducer);

class MainPage extends React.PureComponent {

  render() {

    return (
      <Provider store={store}>
          <div>
              <h1>демо работы Redux</h1>
              <CounterButton counterid={111} />
              <CounterButton counterid={222} />
          </div>
      </Provider>
    );

  }

}

export default MainPage;
