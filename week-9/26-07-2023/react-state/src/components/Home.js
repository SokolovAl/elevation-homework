import Item from "./Item";

const Home = (props) => {
    return (
        <div>
            {props.store.map((item, index) => (
                <Item key = {index} item = {item.item}
                      price = {props.shouldDiscount ? item.price * (1 - item.discount) : item.price}/>))}
        </div>
    );
};

export default Home;
