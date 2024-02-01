import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


const FLASHCARDS_DATA = [];
const CATEGORIES_DATA = [];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App flashcards={FLASHCARDS_DATA} categories={CATEGORIES_DATA} />
  </React.StrictMode>,
)
