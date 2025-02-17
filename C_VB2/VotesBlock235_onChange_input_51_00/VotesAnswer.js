﻿var VotesAnswer = React.createClass({

  displayName: 'VotesAnswer',

  propTypes: {
    code: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    workMode: React.PropTypes.number.isRequired,
    freeanswer: React.PropTypes.bool,
    freeanswertext: React.PropTypes.string.isRequired,
  },

  freeAnswerTextChanged: function(EO) { 
    console.log('VotesAnswer: текст свободного ответа изменён - '+EO.target.value); //EO.target-объект у которого произшло событие, т.е. = input и value -его значение
  },

  render: function() {

    if ( this.props.workMode==1 ) { 
      return React.DOM.div(null,
        React.DOM.label({className:'VotesBlockAnswer'},
          React.DOM.input({type:'radio',value:this.props.code,name:'voteanswer'}),
          React.DOM.span(null,this.props.text),
          this.props.freeanswer
            ?React.DOM.input({type:'text',name:'votefreeanswer',className:'FreeAnswer',
              defaultValue:this.props.freeanswertext,onChange:this.freeAnswerTextChanged})
              // onChange срабатывает при любом изменении и кроссбраузерное
            :null
        ),
      );
    }
    else {
      return React.DOM.div( {className:'VotesBlockAnswer'},
        React.DOM.span({className:'Count'},this.props.count),
        React.DOM.span({className:'Text'},this.props.text)
      );
    }


  },

});