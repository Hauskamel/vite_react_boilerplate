import {useState} from "react";

function Flashcard (props) {

    const [activeAnswer, setActiveAnswer] = useState(false);

    if (activeAnswer === false) {
        return (
            <>
                <div className="fc_wrapper question">
                    <h1 className="fc_name">{props.name}</h1>
                    <p className="fc_text">{props.text}</p>

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