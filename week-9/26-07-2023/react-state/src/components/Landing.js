const Landing = (props) => {
    return (
        <div>
            <div>Welcome, {props.user}. Hottest item in the store: {props.hottestItem.item} for
                 ${props.hottestItem.price}</div>
        </div>
    );
};

export default Landing;
