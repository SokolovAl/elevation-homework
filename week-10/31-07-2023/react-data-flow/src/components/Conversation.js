const Conversation = ({convo, sender, onBackClick}) => {
    return (
        <div>
            <h2>Conversation with {sender}</h2>
            {convo.map((message, index) => (
                <div key = {index}>
                    <span className = "sender">{message.sender === "self" ? "Me" : sender}:</span> {message.text}
                </div>
            ))}
            <button className = "back" onClick = {onBackClick}>Back</button>
        </div>
    );
};

export default Conversation;
