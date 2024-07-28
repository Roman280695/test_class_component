import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// создание jsx - элемента через 
// если несколько элемнтов то добавляем в круглые скобки

// const elem = <h2>Hello world</h2>



const elem = (
  <div>
    <h2>Hello</h2>
    <input type="text"/>
    <button/>
  </div>
);


// создание jsx - при помощи обычных инструментов js

// необходимо передать три аргумента

// 1 - название нашего элемента в верстке - h2
// 2 - назввание классов, если их нет то должны писать - null
// 3 - содержимое нашего тега

// в стандаотной ситуации никто не пользуется таким синтаксисом 

// const elem =  React.createElement('h2', {className: 'greetings'}, 'Hello world');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

 