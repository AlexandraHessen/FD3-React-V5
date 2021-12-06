import React from 'react';

function withColorBackground(Component) {
    //  начинать название с with

    // HOC withColorBackground должен вернуть КОМПОНЕНТ
    // в данном случае возвращаем компонент в функциональном стиле
    return props => (
      <div style={{backgroundColor:"yellow"}}>
        <Component {...props} /> 
        {/* {...props} передаем все пропсы компонента, пробрасываем их */}
      </div>
    );
}

export { withColorBackground };
