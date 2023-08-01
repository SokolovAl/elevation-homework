const Contact = ({name, onContactClick}) => {
    const handleClick = () => {
        onContactClick(name);
    };

    return (
        <div onClick = {handleClick}>
            {name}
        </div>
    );
};

export default Contact;
