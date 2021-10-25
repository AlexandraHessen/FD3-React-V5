import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
    auxClassName: PropTypes.string.isRequired,
  };
  
  state = {
    auxClassName: this.props.auxClassName, // сработает при построении компонента (constructor+WM+DM)
  }
  
  //componentWillUpdate       = ()                   => { console.log('componentWillUpdate');       }; УСТАРЕЛ
  componentWillMount        = ()                   => { console.log('componentWillMount');        };
  componentDidMount         = ()                   => { console.log('componentDidMount');         };
  componentWillUnmount      = ()                   => { console.log('componentWillUnmount');      };
  
  render() {
    return <div className={'VotesQuestion '+this.state.auxClassName}>{this.props.question}</div>;
  }

  componentDidUpdate = (oldProps, oldState) => { 
    console.log('componentDidUpdate');     
    if ( oldProps.auxClassName!==this.props.auxClassName )   
      this.setState({auxClassName:this.props.auxClassName}); // сработает при обновлении компонента
//  если в state red, меняем на blue
// приходят новые props с blue = компонент перерепндорится но все еще с red 
// срабатывает componentDidUpdate мы видим что в пропсах blue ложим его в state
// компонент второй раз перерендорится уже с blue
// поэтому ОБЯЗАТЕЛЬНА проверка! т.к. будет бесконечный цикл
    };

}

export default VotesQuestion;
