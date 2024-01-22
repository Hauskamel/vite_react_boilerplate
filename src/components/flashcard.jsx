function Flashcard (props) {

    return (
        <>
            <div className="fc_wrapper">
                <h1 className="fc_text">{props.text}</h1>
                <button className="fc_show-answer_btn">Show answer</button>
            </div>
        </>
    )
}

export default Flashcard;