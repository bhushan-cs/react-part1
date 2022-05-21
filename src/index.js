import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let counter = 0;

const refresh = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App counter={counter} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)
