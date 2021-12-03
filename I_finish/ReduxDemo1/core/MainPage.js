import React from 'react';
import { Provider } from 'react-redux';
//
import { createStore, combineReducers } from 'redux';
// createStore - создаем Redax
// combineReducers - передаем ему Reducer

import CounterButtons from './CounterButtons';
import CounterDisplay from './CounterDisplay';
import counterReducer from "./counterReducer";

let combinedReducer=combineReducers({
    // combinedReducer - собрать несколько Reducer в один
    // редьюсер counterReducer отвечает за раздел state под именем counter
    counter: counterReducer, 
    // counter - название раздела Redux и им будет управлять ruducer - counterReducer
    // + другие редьюсеры
});

/*
1. мы написали 1 reducer (counterReducer)
2. из него собрали комбинированный reducer (combinedReducer), т.е. reducer управляющий всем Redux сразу
3. сказали Redux создай Store (хранилище данных), которым управляет combinedReducer
*/

let store=createStore(combinedReducer);
// Redux создай store которым управляет этот reducer - combinedReducer(который в себе объединяет все reduserы)
// createStore - СОЗДАТЬ REDUX
class MainPage extends React.PureComponent {

  render() {

    return (
      <Provider store={store}>
      {/* Provider - import { Provider } from 'react-redux'; 
      всё свое приложения мы заварачиваем в tag Provider
      тег Provider говорит, что для всего кода, который внутри будет работать Redux с хранилищем store
      */}
          <div>
              <h1>демо работы Redux</h1>
              <CounterButtons />
              <hr />
              <CounterDisplay />
          </div>
      </Provider>
    );

  }

}

export default MainPage;
