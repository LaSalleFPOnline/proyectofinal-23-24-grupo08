import { Button } from "../button/Button";

export const PricingCards = (props) => {
    return (
        <div className="cardContainer flex flex-col items-center justify-around p-4 border-2 border-blue-500 rounded-lg shadow-md hover:scale-105 hover:shadow-lg" style={{ height: '60vh', width: '300px' }}>
            <h2>{props.title}</h2>
            <hr />
            <p className="price text-4xl font-bold text-blue-500">{props.price}</p>
            <p className="text text-sm text-center">{props.text}</p>
            <Button text="Comprar"></Button>
        </div>
    );
};
