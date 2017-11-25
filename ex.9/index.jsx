import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom'; //eslint-disable-line
import Family from './family';
import Member from './member';

ReactDOM.render(
  <Family lastName="Silva">
    <Member name="Matheus" />
    <Member name="Matheus2" />
    <Member name="Matheus3" />
  </Family>
  , document.getElementById('app'),
);
