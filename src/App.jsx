import {useState} from 'react'
import Flashcard from "./components/flashcard.jsx";
import {nanoid} from "nanoid";
import Category from "./components/category.jsx";
import {flushSync} from "react-dom";


function App(props) {
    const [categories, setCategories] = useState(props.categories)
    const [flashcards, setFlashcards] = useState(props.flashcards);
    const [newName, setNewName] = useState("New Name");

    function addCategory() {
        const categoryName = window.prompt("Type in Category Name");

        const newCategory = {
            categoryName: categoryName,
            id: `category-${nanoid}`
        }
        setCategories([...categories, newCategory]);
    }

    const categoriesList = categories.map(category => (
        <Category
            id={category.id}
            key={category.id}
            name={category.categoryName}
        />
    ))

    function deleteFlashcard(id) {
        const remainingFlashcards = flashcards.filter(card => id !== card.id);
        console.log(remainingFlashcards)
        setFlashcards(remainingFlashcards);
    }

    function setAnswer(id) {
        const clickedCardArr = flashcards.filter(card => id === card.id);
        clickedCardArr.map(clickedCard => {
            return { ...clickedCard }
        });
    }


    const flashCardsList = flashcards.map((card) => (
        <Flashcard
            id={card.id}
            key={card.id}
            name={card.name}
            text={card.text}
            answer={card.answer}
            showAnswer={card.showAnswer}
            setAnswer={setAnswer}
            deleteFlashcard={deleteFlashcard}
            editFlashcard={editFlashcard}
            categories={categoriesList}
        />
    ));

    function addFlashcard() {
        const name = prompt("Type in flashcard name", "Name");
        const text = prompt("Type in flashcard text", "Text");
        const answer = prompt("Type in answer text", "Answer");

        const newFlashcard = {
            name: name,
            text: text,
            answer: answer,
            id: `flashcard-${nanoid()}`
        }
        console.log(flashcards)
        setFlashcards([...flashcards, newFlashcard]);
    }

    function editFlashcard (id) {
        const editedFlashcards = flashcards.map(flashcard => {
            if (id === flashcard.id) {
                return {
                    ...flashcard,
                    text: prompt("Type in new Name")
                }
            }
            return flashcard;
        })
        setFlashcards(editedFlashcards)
    }

    return (
        <>
            <h1>
                Welcome to your flashcards.
            </h1>

            <h2>Categories:</h2>
            <button onClick={addCategory}>Add Category</button>

            <ul>
                {categoriesList}
            </ul>

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


export default App;