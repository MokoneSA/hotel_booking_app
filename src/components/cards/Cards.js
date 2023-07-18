import React, { useContext } from 'react';
import { useState, useEffect } from 'react'; // React Hooks
import { db } from '../../config/firebase'; // importing database from config file
import { collection, getDocs } from 'firebase/firestore'; // Firebase functions
import { faBed, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../context/CartContext';



export const Cards = () => {

    const [rooms, setRooms] = useState([]);
    const hotelRoomsRef = collection(db, "hotelRooms");
    const [rating, setRating] = useState(null);

    // const data = useContext(CartContext);
    // console.log(data)

    const {dispatch} = useContext(CartContext);

    const getRooms = async () => {
        try {
            const data = await getDocs(hotelRoomsRef);

            const filteredData = data.docs.map((doc) => ({
                ...doc.data(), id: doc.id,
            }));

            setRooms(filteredData);

        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        getRooms();
    }, []);

    return (
        <>
            {rooms.map((room,id) => (
                <div className=" overflow-hidden flex flex-row justify-center my-2 border border-gray-300 w-[600px] h-[250px]" key={id}>
                    <div className="image-container w-[40%] h-[200px] m-[10px]">
                        <img className="w-[300px] m-[10px] h-[200px]" src={room.roomImage} alt='roomImage' />
                    </div>
                    <div className="w-[55%] justify-center items-center ml-6 mt-3">
                        <table className=" w-[250px]" >
                            <th className="mb-4"><h3 className="font-bold text-xl mt-2 mb-3 mx-0 " >{room.title}</h3></th>
                            <tr>
                                <td><p className=" font-medium mb-2 ">{room.description}</p></td>
                            </tr>
                            <tr>
                            <td><p className="text-xs font-bold mb-4">Room Type: {room.roomType}</p></td>
                            </tr>
                            <tr>
                            <td><p><FontAwesomeIcon icon={faBed} className=" text-lg font-bold" /> : {room.bedType}</p></td>
                            <td><p><FontAwesomeIcon icon={faUserGroup} className=" text-sm font-medium" /> : {room.numberOfPeople}</p></td>
                            </tr>
                            <tr>
                            <td><p className="text-xs font-bold my-2">Price: R {room.price}.00</p></td>
                            </tr>
                            <tr>
                            <td><button className="text-sky-600 border p-1 ">View more</button></td>
                            <td><button className=" text-sky-600 border p-1" onClick={() => {dispatch({type: 'ADD_TO_CART', id: room.id, room})}}>Add</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cards; 
