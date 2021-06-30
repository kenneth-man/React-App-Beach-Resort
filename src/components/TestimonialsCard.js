import React from 'react';

const TestimonialsCard = ({ firstName, lastName, date, image }) => {
    //regular expression to remove '0's in string
    const day = date.slice(8, 10).replace(/^0+/, '');
    const month = date.slice(5, 7).replace(/^0+/, '');
    const year = date.slice(0, 4);
    const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return (
        <div className='testimonials__card column'>
            <div className='testimonials__card--speechmarks center'>‟</div>

            <img src={image} alt='user' className='testimonials__card--img'/>

            <p className='testimonials__card--p'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <div className='testimonials__card--group column'>
                <h3>{firstName} {lastName}</h3>

                <h4 style={{color: 'goldenrod'}}>{day} &ndash; {monthsArray[parseInt(month)]} &ndash; {year}</h4>
            </div>
        </div>
    )
}

export default TestimonialsCard;