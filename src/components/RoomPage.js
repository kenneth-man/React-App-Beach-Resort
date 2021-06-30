import React, { useState, useEffect, useContext, useRef } from 'react';
import { rooms } from '../Rooms.js';
import { Context } from '../Context.js';
import RoomCard from './RoomCard.js';

const RoomPage = () => {
    const startedSearching = useRef(false);
    const { resetRoomsData } = useContext(Context);
    const [maxCapacity, setMaxCapacity] = useState(1);
    const [roomSize, setRoomSize] = useState(300);
    const [maxPrice, setMaxPrice] = useState(149.99);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);
    const [displayedCards, setDisplayedCards] = useState([]);

    useEffect(() => {
        resetRoomsData();
    }, [])

    useEffect(() => {
        //preventing this useEffect from running on initial render of this component; in order to display the message to user 'No rooms found...'
        //'useRef()' returns an object will persist for the full lifetime of the component (same ref object on every render); an ordinary variable would be reset.
        //the next time this useEffect is run, then the 'if' statement condition will evaluate to true, running the code body
        if(startedSearching.current){
            const matchingRooms = rooms.filter(curr => 
                curr.capacity <= maxCapacity && curr.size <= roomSize && curr.price <= maxPrice && curr.breakfast === breakfast && curr.pets === pets
            )
    
            setDisplayedCards(matchingRooms);
        } else {
            startedSearching.current = true;
        }
    }, [maxCapacity, roomSize, maxPrice, breakfast, pets])

    
    return (
        <div className='roomPage content column'>
            <h1 className='roomPage__h1'>Search All Rooms</h1>

            <form className='roomPage__search row'>
                <div className='column wrapper'>
                    <label htmlFor='capacity'>Max Capacity</label>
                    <input type='number' name='capacity' min='1' max='6' value={maxCapacity} onChange={e => setMaxCapacity(e.target.value)} className='roomPage__input'/>
                </div>

                <div className='column wrapper'>
                    <label htmlFor='room'>Room Size (SQFT)</label>
                    <input type='number' name='room' min='300' max='1500' value={roomSize} onChange={e => setRoomSize(e.target.value)} className='roomPage__input'/>
                </div>

                <div className='column wrapper'>
                    <label htmlFor='price'>Max Price</label>
                    <input type='range' name='price' min='149.99' max='1159.99' value={maxPrice} onChange={e => setMaxPrice(e.target.value)} className='roomPage__input'/>
                    <h3 className='roomPage__pricing'>£{maxPrice}</h3>
                </div>

                <div className='column wrapper'>
                    <div className='row'>
                        <input type='checkbox' name='breakfast' value={breakfast} onChange={e => setBreakfast(e.target.checked)} className='roomPage__checkbox'/>
                        <label htmlFor='breakfast'>Breakfast</label>
                    </div>

                    <div className='row'>
                        <input type='checkbox' name='pets' value={pets} onChange={e => setPets(e.target.checked)} className='roomPage__checkbox'/>
                        <label htmlFor='pets'>Pets</label>
                    </div>
                </div>
            </form>

            <div className='roomPage__results row'>
                {
                    //can't do 'displayedCards === []' since empty arrays evaluate to true
                    displayedCards.length === 0 ?

                    <h2 className='roomPage__h2'>🠕 &nbsp; No Rooms Found. Use the above search panel to search for rooms &nbsp; 🠕</h2> :

                    displayedCards.map((curr, index) => 
                        <RoomCard
                            key={index}
                            roomName={curr.name}
                            roomPrice={curr.price}
                            roomImage={curr.image}
                            RoomsRoomCard={true}
                        />
                    )  
                }
            </div>
        </div>
    )
}

export default RoomPage;