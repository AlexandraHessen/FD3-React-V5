var VotesBlock = React.createClass({

  displayName: 'VotesBlock',

  render: function() {
        var answersCode=this.props.answers.map( v =>
            React.DOM.div({key:v.code,className:'Answer'},
              React.DOM.span({className:'Count'},v.count),
              React.DOM.span({className:'Text'},v.text),
            )
          ); 

        return React.DOM.div( {className:'VotesBlock'}, 
          React.DOM.div( {className:'Question'}, this.props.question ),
          React.DOM.div( {className:'Answers'}, answersCode ),
        );
      },
    
});
// map 
//выполняет указанную функцию для каждого элемента массива последовательно; 
//из значений, которые вернёт функция, составляется новый массив
// Описание нового компонента с именем ИмяКомпонента:

// var ИмяКомпонента = React.createClass({
//   displayName: "отображаемое имя компонента",
//   render: function () {
//     return React.createElement(...);
//   },
// })

// react все делит на стандартные теги и наши компоненты
// все стандартные теги с маленькой буквы наши компоненты всегда с Большой

// React.DOM.тэг(хэш с атрибутами, содержимое)
// создать HTML-тег; в хэше с атрибутами — атрибуты тега, 
// только следует использовать не нативные имена HTML-атрибутов, а имена соответствующих им DOM-свойств, если они различаются (htmlFor, className)

// render возвращает всегда только 1 тег, если нужно больше обаращиваем все в div
 //первый всегда атрибуты
// все остальные параменты это содержимое ( второй и тд)