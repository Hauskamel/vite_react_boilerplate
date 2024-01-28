function FlashcardBack (props) {

    let flashcardAnswerActivedd = false;

    return (
        <>
            <div className="fc_wrapper answer hidden">
                <p className="fc_answer_text">{props.answer}</p>
            </div>
        </>
    )
}

export default FlashcardBack;