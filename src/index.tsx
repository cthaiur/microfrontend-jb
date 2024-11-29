import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => (
  <div className="h-screen flex justify-center items-center bg-gray-100">
    Bem vindo ao microfrontend do Sr. Baltazar!
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
