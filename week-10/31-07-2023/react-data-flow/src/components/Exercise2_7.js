import {useState} from "react";
import Conversation from "./Conversation";
import List from "./List";

const Exercise2_7 = ({data}) => {
    const [displayConversation, setDisplayConversation] = useState(null);

    const displayConvo = (name) => {
        setDisplayConversation(name);
    };

    const handleBackClick = () => {
        setDisplayConversation(null);
    };

    const contacts = data.conversations.map((conversation) => conversation.with);

    return (
        <div>
            {displayConversation ? (
                <Conversation
                    convo = {data.conversations.find(conversation => conversation.with === displayConversation).convo}
                    sender = {displayConversation} onBackClick = {handleBackClick}/>
            ) : (
                <List contacts = {contacts} onContactClick = {displayConvo}/>
            )}
        </div>
    );
};

export default Exercise2_7;