import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 55},
    {id: 2, message: "It's my first post", likesCount: 66}
];
let dialogs = [
    {id: 1, name: 'Den'},
    {id: 2, name: 'Marta'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'Jonh'},
    {id: 5, name: 'Daynerys'},
    {id: 6, name: 'Tyrion'}
];
let messages = [
    {id: 1, message: 'Hop'},
    {id: 2, message: 'Hey'},
    {id: 3, message: 'Lalaley'},
    {id: 4, message: 'Ya propil'},
    {id: 5, message: 'vseh'},
    {id: 6, message: 'druzey'}
];
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
