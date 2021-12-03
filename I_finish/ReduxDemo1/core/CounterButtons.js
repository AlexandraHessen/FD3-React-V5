import React from 'react';
import {connect} from 'react-redux';
// позволяет React компоненту подписаться на Redux 

class intCounterButtons extends React.PureComponent {

  incCounter = () => {
    this.props.dispatch( { type:"INC" } );
    // .dispatch - передает этот Action Reduceru
    // а Action у нас это хэш с type ОБЯЗАТЕЛЬНО
  }

  decCounter = () => {
    this.props.dispatch( { type:"DEC" } );
  }
  
  render() {

    return (
      <div className="CounterButtons">
        <input type='button' value='-' onClick={this.decCounter} />
        <input type='button' value='+' onClick={this.incCounter} />
      </div>
    );

  }

}

//---------------- 1 Вариант ----------------//
// ПРОЧИТАТЬ COMMENT 2 ВАРИАНТА
const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

// но этому компоненту нужен сам this.props.dispatch, и чтобы
// он появился, следует присоединить (connect) компонент к хранилищу Redux

// заворачиваем в HOC
// connect  import {connect} from 'react-redux'; 
// позволяет React компоненту подписаться на Redux 
// connect в качестве аргумента дожен получить хэш, который говорит 
// что из Redux под какими props должно прилететь
const CounterButtons = connect(mapStateToProps)(intCounterButtons);


//---------------- 2 Вариант ----------------//
// можно вообще не указывать mapStateToProps
// если мы не передаем первый аргумент const CounterButtons = connect()(intCounterButtons);
// то connect передает сам dispatch

//т.е.

//* если передали аргумент mapStateToProps
// тем самым сказали предоставь мне в качестве props функции, т.е. callback которые мне нужно дернуть,
// чтобы увеливать счетчик на 1 или 0

//* если НЕ передали аргумент mapStateToProps
// т.е. не говорю какие действия четко вызывать, не готовь для меня callback,
// дай мне сам dispath, я его сам вызову и сам ему передам action 


// но этому компоненту нужен сам this.props.dispatch, и чтобы
// он появился, следует присоединить (connect) компонент к хранилищу Redux


// заворачиваем в HOC
// connect  import {connect} from 'react-redux'; 
// позволяет React подписаться на Redux 
// connect в качестве аргумента дожен получить хэш, который говорит 
// что из Redux под какими props должно прилететь
const CounterButtons = connect()(intCounterButtons);

export default CounterButtons;