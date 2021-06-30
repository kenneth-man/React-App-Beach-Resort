import React, { useContext } from 'react';
import { Context } from '../Context.js';
import spinner from '../res/spinner.gif';
import TestimonialsCard from './TestimonialsCard.js';

const Testimonials = () => {
    const { testimonialsUsers } = useContext(Context);

    return (
        <div className='testimonials content column'>
            <h1 className='testimonials__h1'>Customer Testimonials</h1>

            <h2 className='testimonials__h2'>See what our customers have to say about their experience with us...</h2>

            <div className='testimonials__grid'>
                {
                    testimonialsUsers.length < 6 ?

                    <img src={spinner} alt='spinner' className='spinner'/> :

                    testimonialsUsers.map((curr, index) => 
                        <TestimonialsCard 
                            key={index}
                            firstName={curr.name.first}
                            lastName={curr.name.last}
                            date={curr.registered.date}
                            image={curr.picture.large}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Testimonials;