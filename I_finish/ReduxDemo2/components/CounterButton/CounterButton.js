import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { counterButton_create, counterButton_add } from '../../redux/countersAC';

import './CounterButton.css';

class CounterButton extends React.PureComponent {

  static propTypes = {
    counterid: PropTypes.number.isRequired, // передано из родительского компонента
    counters: PropTypes.object.isRequired, // передано из Redux (все счетчики, хэш со счетчиками)
  };

  componentWillMount() {
    // изначально счётчика с идентификатором counterid нет
    // создадим
    this.props.dispatch( counterButton_create(this.props.counterid) );
    // раньше this.props.dispatch( { type:"INC" } );
    // теперь мы вызываем функцию из файла с экшенами которая возвращает такой хэш
    //  {type: COUNTER_BUTTON_CREATE, counterid:counterid}
  }

  incCounter = () => {
    this.props.dispatch( counterButton_add(this.props.counterid,1) );
    // раньше this.props.dispatch( { type:"COUNTER_BUTTON_ADD" } );
    // теперь мы вызываем функцию из файла с экшенами которая возвращает такой хэш
    //  {    type: COUNTER_BUTTON_ADD, counterid:counterid, addvalue:addvalue,}
  }

  decCounter = () => {
    this.props.dispatch( counterButton_add(this.props.counterid,-1) );
  }
  
  render() {

    // получим значение нужного счётчика
    let counterValue=this.props.counters.cnts[this.props.counterid];

    return (
      <div className="CounterButton">
        <input type='button' value='-' onClick={this.decCounter} />
        <span className="CounterButtonValue">{counterValue}</span>
        <input type='button' value='+' onClick={this.incCounter} />
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    // весь раздел Redux state под именем counters будет доступен
    // данному компоненту как this.props.counters
    counters: state.counters,
  };
};

export default connect(mapStateToProps)(CounterButton);
// экспортируем не этот класс CounterButton а уже обвернутый
