function Flashcard (props) {

    return (
        <>
            <div className="fc_wrapper">
                <h1 className="fc_name">{props.name}</h1>
                <p className="fc_text">{props.text}</p>
                <button className="fc_show-answer_btn">Show answer</button>
                <button className="fc_remove" onClick={() => props.deleteFlashcard(props.id)}>Remove flashcard</button>
            </div>
        </>
    )
}

export default Flashcard;