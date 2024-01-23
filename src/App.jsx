import {useState} from 'react'
import Flashcard from "./components/flashcard.jsx";

function App(props) {

    let [flashcards, setFlashcards] = useState(props.flashcards);

    console.log(flashcards.map(card => {
        console.log(card)
    }))

    const flashCardsList = flashcards.map((card, index) => (
        <Flashcard key={index} name={card.name} text={card.text} />
    ));

    function addFlashcard () {
        const newFlashcard = {
            name: "What ever Name",
            text: "What ever Text"
        }
        setFlashcards([...flashcards, newFlashcard])
    }

    function deleteFlashcard () {

    }

    return (
        <>
            <h1>
                Welcome to your flashcards.
            </h1>
            <p>There are currently {flashcards.length} flashcards to study.</p>

            <div className="fc_button-wrapper">
                <button className="fc_add-btn" onClick={addFlashcard}>Add Flashcard</button>
                <button className="fc_remove-btn" onClick={deleteFlashcard}>Remove Flashcard</button>
            </div>

            <div className="fc_list_wrapper">
                {flashCardsList}
            </div>
        </>
    )
}

export default App
