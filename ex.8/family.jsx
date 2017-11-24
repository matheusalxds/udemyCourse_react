import React from 'react'; //eslint-disable-line

export default props => (
  <div>
    <h1>Familia</h1>
    {React.cloneElement(props.children, { ...props })}
  </div>
);

