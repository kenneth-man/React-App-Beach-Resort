import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { homeImages, homeIcons } from '../Images.js';
import RoomCard from './RoomCard.js';
import { Context } from '../Context.js';

const Home = () => {
    const { HomeCards } = useContext(Context);

    return (
        <div className='home content column'>
            <div className='home__hero center' style={{backgroundImage: `url(${homeImages[0]})`}}>
                <div className='home__hero--inner column round'>
                    <h1 className='home__h1'>Luxurious Rooms</h1>

                    <div className='home__border'/>

                    <h2 className='home__h2'>Deluxe Rooms Starting At £149.99</h2>

                    <Link to='/RoomPage' className='main-btn center transition'>Find out more</Link>
                </div>
            </div>

            <div className='home__featured column'>
                <h1>Featured Rooms</h1>

                <div className='home__inner--row row'>
                    {
                        HomeCards.map((curr, index) => 
                            <RoomCard
                                key={index}
                                roomName={curr.name}
                                roomPrice={curr.price}
                                roomImage={curr.image}
                            />
                        )
                    }
                </div>
            </div>

            <div className='home__services column' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${homeImages[1]})`}}>
                <h1 style={{color: '#fff'}}>Services</h1>

                <div className='home__inner--row row'>
                    <div className='home__services--box column round shadow'>
                        <img src={homeIcons[0]} alt='service-icon' className='icon'/>

                        <h3>Global Reach</h3>

                        <h4>Lorem ipsum dolor sit amet consectetu adipisicing elit. Magni, corporis!</h4>
                    </div>

                    <div className='home__services--box column round shadow'>
                        <img src={homeIcons[1]} alt='service-icon' className='icon'/>

                        <h3>Endless Hiking</h3>

                        <h4>Lorem ipsum dolor sit amet consectetu adipisicing elit. Magni, corporis!</h4>
                    </div>

                    <div className='home__services--box column round shadow'>
                        <img src={homeIcons[2]} alt='service-icon' className='icon'/>

                        <h3>Diversity</h3>

                        <h4>Lorem ipsum dolor sit amet consectetu adipisicing elit. Magni, corporis!</h4>
                    </div>

                    <div className='home__services--box column round shadow'>
                        <img src={homeIcons[3]} alt='service-icon' className='icon'/>

                        <h3>Best Service 2021</h3>

                        <h4>Lorem ipsum dolor sit amet consectetu adipisicing elit. Magni, corporis!</h4>
                    </div>
                </div>
            </div>

            <div className='home__footer column'>
                <div className='home__footer--row row'>
                    <a href='www.google.com'>Privacy Policy</a>

                    <a href='www.google.com'>Terms of Use</a>

                    <a href='www.google.com'>Terms and Conditions</a>

                    <a href='www.google.com'>Careers</a>

                    <a href='www.google.com'>Contact Us</a>
                </div>

                <h1 className='home__footer--h1'>Copyright © 2021 Beach Resort UK Ltd. All Rights Reserved.</h1>
            </div>
        </div>
    )
}

export default Home;