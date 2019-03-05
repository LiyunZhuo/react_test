import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import TicTacToe from './TicTacToe';
import Contact from './pages/Contact';
// import * as serviceWorker from './serviceWorker';

const MOUNT_NODE = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Contact />,
        MOUNT_NODE,
    );
};
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
