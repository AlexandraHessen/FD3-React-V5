import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// позволяет React компонентам подписаться на Redux 

class intCounterDisplay extends React.PureComponent {

  static propTypes = {
    cnt: PropTypes.number.isRequired, // получено из Redux
  };

  render() {

    return (
      <div className="CounterDisplay">
        Значение счётчика: {this.props.cnt}
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  // этот хэш говорит что из Redax под какими props должно прилететь мне в компонент
  return {
    // из раздела Redux с именем counter свойство cnt будет доступно
    // данному компоненту как this.props.cnt

    // я хочу в качестве props получить cnt 
    cnt: state.counter.cnt,
  };
};

// присоединяем (connect) компонент к хранилищу Redux
// заворачиваем в HOC
// connect  import {connect} from 'react-redux'; 
// позволяет React компонентам подписаться на Redux 
// connect в качестве аргумента дожен получить хэш, который говорит 
// что из Redux под какими props должно прилететь
const CounterDisplay = connect(mapStateToProps)(intCounterDisplay);

export default CounterDisplay;
// заворачиваем в HOC поэтому возвращаем такое название
