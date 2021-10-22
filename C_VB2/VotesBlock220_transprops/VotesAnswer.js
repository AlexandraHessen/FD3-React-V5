var VotesAnswer = React.createClass({

  displayName: 'VotesAnswer',

  propTypes: {
    code: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    workMode: React.PropTypes.number.isRequired, // 1- прием голоса, 2- отображение результата
  },

  render: function() {

    if ( this.props.workMode==1 ) {
      return React.DOM.div(null,
        React.DOM.label({className:'VotesBlockAnswer'},
          React.DOM.input({type:'radio',value:this.props.code,name:'voteanswer'}),
          React.DOM.span(null,this.props.text)
          // положить input и span в один label позволяет пользователю выбирать вариант щелчком по тексту
        ),
      );
    }
    else {
      return React.DOM.div( {className:'VotesBlockAnswer'},
        React.DOM.span({className:'Count'},this.props.count),
        React.DOM.span({className:'Text'},this.props.text),
      );
    }


  },

});