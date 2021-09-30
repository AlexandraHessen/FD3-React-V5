// Описание нового компонента с именем ИмяКомпонента:

// var ИмяКомпонента = React.createClass({
//   displayName: "отображаемое имя компонента",
//   render: function () {
//     return React.createElement(...);
//   },
// })

var VotesBlock = React.createClass({
// react все делит на стандартные теги и наши компоненты
// все стандартные теги с маленькой буквы наши компоненты всегда с Большой
  displayName: 'VotesBlock',

  getDefaultProps: function() {
    return { question: "Вопрос ни о чём" }
  },

  render: function() {

    var answersCode=[];
    for ( var a=0; a<this.props.answers.length; a++ ) {
      var answer=this.props.answers[a];
      var answerCode=        
        React.DOM.div({key:answer.code,className:'Answer'},
          React.DOM.span({className:'Count'},answer.count),
          React.DOM.span({className:'Text'},answer.text),
        );
      answersCode.push(answerCode);
    }

    // render возвращает всегда только 1 тег, если нужно больше обаращиваем все в div
    return React.DOM.div( {className:'VotesBlock'}, 
    //первый всегда атрибуты
    // все остальные параменты это содержимое ( второй и тд)
      React.DOM.div( {className:'Question'}, this.props.question ),
      // все что передано мне в качестве атрибута в мой компонент, я внутри компонента вижу под именем this.props
      React.DOM.div( {className:'Answers'}, answersCode ),
    );
  },

});