import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom'; //eslint-disable-line
import ClassComponent from './classComponent';

ReactDOM.render(
  <ClassComponent
    label="Counter"
    initialValue={0}
  />,
  document.getElementById('app'),
);
