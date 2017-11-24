import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom'; //eslint-disable-line
import { Primeiro, Segundo} from './component';

ReactDOM.render(
  <div>
    <Primeiro value="show!!" />
    <Segundo />
  </div>
  , document.getElementById('app'));

