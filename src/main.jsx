import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


const DATA = [{
    name: "Flashcard Name 1",
    text: "What is the highest Mountain on Earth?"
}, {
    name: "Flashcard Name 2",
    text: "What is the highest Mountain on Mars?"
}, {
    name: "Flashcard Name 3",
    text: "What is the highest Mountain on Saturn?"
}];



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App flashcards={DATA} />
  </React.StrictMode>,
)
