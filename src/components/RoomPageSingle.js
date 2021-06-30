import React, { useContext } from 'react';
import { Context } from '../Context.js';
import { Link } from 'react-router-dom';
import spinner from '../res/spinner.gif';

const RoomPageSingle = () => {
    const { currRoom } = useContext(Context);

    return (
        <div className='roomPageSingle content center'>
            {
                currRoom ?

                <div className='roomPageSingle__inner column'>
                    <div className='roomPageSingle__hero center' style={{backgroundImage: `url(${currRoom.image})`}}>
                        <div className='roomPageSingle__hero-box column round'>
                            <h1 className='roomPageSingle__h1'>{currRoom.name}</h1>

                            <div className='home__border'/>

                            <Link to='/RoomPage' className='main-btn center transition'>See more rooms</Link>
                        </div>
                    </div>

                    <div className='roomPageSingle__content'>
                        <div className='roomPageSingle__content-box roomPageSingle__content-box--1 column'>
                            <h1>Details</h1>

                            <p>{currRoom.desc}</p>
                        </div>

                        <div className='roomPageSingle__content-box roomPageSingle__content-box--2 column'>
                            <h1 className='roomPageSingle__list-title'>Info</h1>

                            <div className='roomPageSingle__list column'>
                                <h2 className='roomPageSingle__h2'>Price &ndash; £{currRoom.price}</h2>
                                <h2 className='roomPageSingle__h2'>Size &ndash; {currRoom.size} SQFT</h2>
                                <h2 className='roomPageSingle__h2'>Max Capacity &ndash; {currRoom.capacity > 1 ? 'People' : 'Person'}</h2>
                                <h2 className='roomPageSingle__h2'>Pets Allowed &ndash; {currRoom.pets ? 'Allowed' : 'Not Allowed'}</h2>
                                <h2 className='roomPageSingle__h2'>Free Breakfast &ndash; {currRoom.breakfast ? 'Allowed' : 'Not Allowed'}</h2>
                            </div>
                        </div>

                        <div className='roomPageSingle__content-box roomPageSingle__content-box--3 column'>
                            <h1>Extra</h1>

                            <div className='roomPageSingle__grid-list'>
                                {
                                    currRoom.extras.map((curr, index) => 
                                        <h2 key={index} className='roomPageSingle__h2'>&ndash; {curr}</h2>   
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div> :

                <img src={spinner} alt='loading' className='spinner'/>
            }
        </div>
    )
}

export default RoomPageSingle;