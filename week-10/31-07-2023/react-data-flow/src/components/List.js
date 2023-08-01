import Contact from "./Contact";

const List = ({contacts, onContactClick}) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key = {index} onClick = {() => onContactClick(contact)}>
                        <Contact name = {contact} onContactClick = {onContactClick}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
