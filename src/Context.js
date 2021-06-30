import React, { createContext, useState, useEffect } from 'react';
import { rooms } from './Rooms.js';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    //HOME
    const [HomeCards, setHomeCards] = useState([]);
    const [HomeCardsChosen, setHomeCardsChosen] = useState([]);

    //reset 'rooms' data array by adding the elements back that were spliced out
    const resetRoomsData = () => {
        HomeCardsChosen.forEach(curr => rooms.push(curr));
        setHomeCardsChosen([]);
    }

    //get random home card
    const getRdmHomeCard = () => {
        const index = Math.round(Math.random() * rooms.length);
        const card = rooms[index];
        
        if(!rooms[index]){
            getRdmHomeCard();
            return;
        }

        //remove element that is chosen to prevent duplicate rooms being shown on home
        rooms.splice(index, 1);

        setHomeCardsChosen(() => [...HomeCardsChosen, card]);
        setHomeCards(() => [...HomeCards, card]);
    }

    useEffect(() => {
        if(HomeCards.length < 3){
            getRdmHomeCard();
        }
    }, [HomeCards]);



    //ROOM PAGE SINGLE
    const [currRoomName, setCurrRoomName] = useState('');
    const [currRoom, setCurrRoom] = useState('');

    const fetchMatchingCurrRoomName = () => {
        const match = rooms.find(curr => curr.name === currRoomName);

        if(match)
            setCurrRoom(match);
    }

    useEffect(() => {
        if(currRoomName){
            resetRoomsData();
            fetchMatchingCurrRoomName();
        }
    }, [currRoomName]);



    //TESTIMONIALS (random users api github)
    const [testimonialsUsers, setTestimonialsUsers] = useState([]);

    const fetchTestimonialsUser = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            setTestimonialsUsers([...testimonialsUsers, data.results[0]]);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        //6 users shown in 'testimonials' component
        if(testimonialsUsers.length < 6)
            fetchTestimonialsUser();
    }, [testimonialsUsers])


    return (
        <Context.Provider value={{ HomeCards, currRoom, setCurrRoomName, fetchMatchingCurrRoomName, resetRoomsData, testimonialsUsers }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;