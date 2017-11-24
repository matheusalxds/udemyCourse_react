import React from 'react'; //eslint-disable-line
import { childrenWithProps } from '../utils/reactUtils';

export default props => (
  <div>
    <h1>Familia</h1>
    {childrenWithProps(props.children, props)}
  </div>
);

