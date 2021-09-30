// Описание нового компонента с именем ИмяКомпонента:

// var ИмяКомпонента = React.createClass({
//   displayName: "отображаемое имя компонента",
//   render: function () {
//     return React.createElement(...);
//   },
// })

var MyComponent = React.createClass({
// react все делит на стандартные теги и наши компоненты
// все стандартные теги с маленькой буквы наши компоненты всегда с Большой
  displayName: 'MyComponent',

  render: function(){
// React.DOM.тэг(хэш с атрибутами, содержимое)
// создать HTML-тег; в хэше с атрибутами — атрибуты тега, 
// только следует использовать не нативные имена HTML-атрибутов, а имена соответствующих им DOM-свойств, если они различаются (htmlFor, className)
    
// render возвращает всегда только 1 тег, если нужно больше обаращиваем все в div
return React.DOM.div( {className:'MyComponentFrame'}, //первый всегда атрибуты
      // все остальные параменты это содержимое ( второй и тд)
      React.DOM.h1( null, "Всем привет!" ),
      React.DOM.div( {className:'MyComponentText'}, "Начинаем изучение React!" ),
    );
  },

});