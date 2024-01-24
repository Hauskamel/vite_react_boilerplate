import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


const DATA = [{
    name: "Flashcard Showcase",
    text: "This is not a real flashcard"
}];



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App flashcards={DATA} />
  </React.StrictMode>,
)
