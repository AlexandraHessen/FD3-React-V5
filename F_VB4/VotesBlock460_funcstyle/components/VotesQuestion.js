import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

const VotesQuestion = props => {
  return <div className='VotesQuestion'>{props.question}</div>;
}

VotesQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};

export default VotesQuestion;

// class VotesQuestion extends React.Component {

//   static propTypes = {
//     question: PropTypes.string.isRequired,
//   };
  
//   render() {
//     return <div className='VotesQuestion'>{this.props.question}</div>;
//   }

// }



// если propTypes не нужны, можно короче (экспортируется безымянная функция):
/*
import React from 'react';

import './VotesQuestion.css';

export default props => {
  return <div className='VotesQuestion'>{props.question}</div>;
}
*/

// если всё что делает render - это return (т.е. нет никакой логики перед return), можно ещё короче:
/*
import React from 'react';

import './VotesQuestion.css';

export default props => <div className='VotesQuestion'>{props.question}</div>;

как в данном случае родитель понял что это имеено этот кодд ведь он у нас без имени?

не имеет значения как мы его тут в это модуле назовем или не назовем

главное что родительский модуль по пути ('./VotesQuestion') из это получает код а имя уже в родительском модум присваивает сам

в общем код идет не по имени а по размещению('./VotesQuestion')
это касается DEFAULT!!!
*/

