import React, { useContext } from 'react';
import { Context } from '../Context.js'; 
import { Link } from 'react-router-dom';

const RoomCard = ({ roomName, roomPrice, roomImage, RoomsRoomCard = undefined }) => {
    const { setCurrRoomName } = useContext(Context);

    const updateCurrRoom = () => {
        setCurrRoomName(roomName);
    }

    return (
        <div className={RoomsRoomCard ? 'room-card column round shadow transition room-card__roomsPage' : 'room-card column round shadow transition'}>
            <div className='room-card__main center' style={{backgroundImage: `url(${roomImage})`}}>
                <div className='room-card__popup center transition'>
                    <Link to={`/${roomName}`} className='main-btn center transition' onClick={updateCurrRoom}>Features</Link> 
                </div>
            </div>

            <div className='room-card__name center'>
                <h3 className='room-card__h3'>{roomName}</h3>
            </div>

            <div className='room-card__pricing column transition'>
                <h5>£{roomPrice}</h5>

                <h6>per night</h6>
            </div>
        </div>
    )
}

export default RoomCard;