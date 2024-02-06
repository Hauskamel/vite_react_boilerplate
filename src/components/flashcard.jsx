import {useState} from "react";
import Category from "./category.jsx";

function Flashcard (props) {
    const [activeAnswer, setActiveAnswer] = useState(false);
    const [newName, setNewName] = useState("");

    if (activeAnswer === false) {
        return (
            <>
                <div className="fc_wrapper question">
                    <h1 className="fc_name">{props.name}</h1>
                    <p className="fc_text">{props.text}</p>

                    <select>
                        {props.categories}
                    </select>

                    <br/>

                    <button
                        className="fc_show-answer_btn"
                        onClick={() => {
                            props.setAnswer(props.id);
                            setActiveAnswer(true);
                        }}
                    >Show answer
                    </button>

                    <button className="fc_remove" onClick={() => {
                        props.deleteFlashcard(props.id)
                    }}>Remove flashcard
                    </button>


                   <button className="fc_edit" onClick={() => {
                       props.editFlashcard(props.id, props.name, props.text, props.answer);
                   }}>
                       Edit Flashcard
                   </button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="fc_wrapper answer">
                    <p className="fc_answer_text">{props.answer}</p>

                    <button onClick={() => setActiveAnswer(false)}>Show Question</button>
                </div>
            </>
        )
    }
}

export default Flashcard;