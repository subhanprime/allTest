import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// (function test() {
//   setTimeout(function () {
//     console.log(4);
//   }, 0);
//   new Promise(function executor(resolve) {
//     console.log(1);
//     for (var i = 0; i < 10000; i++) {
//       i === 9999 && resolve();
//     }
//     console.log(2);
//   }).then(function () {
//     console.log(5);
//   });
//   console.log(3);
// })()
// 1
// 1-9999
// 2
// 5
// 3
// 4

// var y = 1;
// if (function f() { }) {
//   y += typeof f;
// }
// console.log(y);
// Array.sort()


