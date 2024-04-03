import React from 'react';
import { PricingCards } from '../../components/pricingCards/PricingCards';
import { pricing } from '../../components/pricingCards/content';

const PricingPage = (props) => {
    return (
        <div className='flex flex-row w-full justify-center items-center p-4 gap-12'>
            {pricing.map((item, index) => (
                <PricingCards 
                    key={index}
                    title={item.title}
                    price={item.price}
                    text={item.text}
                />
            ))}
        </div>
    );
};

export default PricingPage;
