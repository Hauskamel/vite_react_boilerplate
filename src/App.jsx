import {useState} from 'react'
import Flashcard from "./components/flashcard.jsx";

function App(props) {

    let [flashcards, setFlashcards] = useState(props.flashcards);

    function deleteFlashcard(id) {
        const remainingFlashcards = flashcards.filter(card => id !== card.id);
        console.log(id)
        setFlashcards(remainingFlashcards);
    }

    const flashCardsList = flashcards.map((card, index) => (
        <Flashcard
            id={card.id}
            key={index}
            name={card.name}
            text={card.text}
            deleteFlashcard={deleteFlashcard}
        />
    ));

    function addFlashcard() {
        const newName = prompt("Type in flashcard name");
        const newText = prompt("Type in flashcard text");

        const newFlashcard = {
            name: newName,
            text: newText
        }
        setFlashcards([...flashcards, newFlashcard])
    }


    return (
        <>
            <h1>
                Welcome to your flashcards.
            </h1>
            <p>There are currently {flashcards.length} flashcards to study.</p>

            <div className="fc_button-wrapper">
                <button className="fc_add-btn" onClick={addFlashcard}>Add Flashcard</button>
            </div>

            <div className="fc_list_wrapper">
                {flashCardsList}
            </div>
        </>
    )
}

export default App
