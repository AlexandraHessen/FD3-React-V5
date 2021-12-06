import React from 'react';

function withColorBackground(color) {
    return function(Component) {
      return props => (
        <div style={{backgroundColor:color}}>
          <Component {...props} />
        </div>
      );
    };
}


//  Тоже самое в стрелочном стиле
/*
let withColorBackground = color => Component => props =>{
// let withColorBackground = (color, width) => Component => props =>
    <div style={{backgroundColor:color}}>
      <Component {...props} />
    </div>
;
}

*/

export { withColorBackground };
