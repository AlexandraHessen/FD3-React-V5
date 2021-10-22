var VotesAnswer = React.createClass({

  displayName: 'VotesAnswer',

  propTypes: {
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
  },

  render: function() {

    return React.DOM.div( {className:'VotesBlockAnswer'},
      React.DOM.span({className:'Count'},this.props.count),
      React.DOM.span({className:'Text'},this.props.text),
    );
  },

});

// var answersCode=this.props.answers.map( v =>
//   React.DOM.div({key:v.code,className:'Answer'},
//     React.DOM.span({className:'Count'},v.count),
//     React.DOM.span({className:'Text'},v.text),
//   )
// );