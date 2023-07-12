import React, { useState, useEffect } from 'react';
import { db, storage } from '../../config/firebase'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref } from 'firebase/storage'



const ViewModal = () => {

    const [imageUpload, setImageUpload] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [contact, setContact] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState('');
    const [roomType, setRoomType] = useState('');
    const [bedType, setBedType] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [] = useState('');

    // View and delete room section
    const [rooms, setRooms] = useState([]);
    const hotelRoomsRef = collection(db, "hotelRooms");

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

    // Update room  function
    const updateRoom = () => {

    }

    // delete room function
    const deleteRoom = async (id) => {
        const hotelRooms = doc(db, "hotelRooms", id);
        await deleteDoc(hotelRooms);
    }


    useEffect(() => {
        getRooms();
    }, []);

    return (
        <div className="w-screen h-screen bg-sky-950 fixed flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-black text-2xl m-[30px]">Add New Room</h3>
                <form className="flex flex-row items-center justify-center bg-slate-300" >
                    <div className="left-side w-[450px] flex flex-col mx-10 my-10">
                        <img className="image" src={imageUpload} alt="" />
                        <input className="my-0" type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
                        <label className="text-base font-medium mx-0 my-2 mr-[30px]">Title</label>
                        <input
                            type="text"
                            placeholder=" Enter title..."
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <label className="text-base font-medium mx-0 my-2.5">Description</label>
                        <input
                            type="text"
                            placeholder=" Enter description"
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <label className="text-base font-medium mx-0 my-2.5">Address</label>
                        <input
                            type="text"
                            placeholder=" Enter address"
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <label className="text-base font-medium mx-0 my-2.5">Price</label>
                        <input
                            type="text"
                            placeholder=" Enter price..."
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <label className="text-base font-medium mx-0 my-2.5">Max People</label>
                        <input
                            type="text"
                            placeholder=" Enter number of people"
                            onChange={(e) => setNumberOfPeople(e.target.value)}
                            required
                        />
                    </div>
                    <div className="right-side flex flex-col w-[450px] mx-10 my-10">
                        <label className="text-base font-medium mx-0 my-2.5">Contact</label>
                        <input
                            type="text"
                            placeholder=" Enter contact details..."
                            onChange={(e) => setContact(e.target.value)}
                            required
                        />
                        <label className="text-base font-medium mx-0 my-2.5">Number of rooms</label>
                        <input
                            type="text"
                            placeholder=" Enter contact details..."
                            onChange={(e) => setNumberOfRooms(e.target.value)}
                            required
                        />
                        <label className="text-base font-medium mx-0 my-2.5">Room type:</label>
                        <select onChange={(e) => setRoomType(e.target.value)} className="w-[360px] h-[30px]">
                            <option>Standard Double Room</option>
                            <option>Suite</option>
                            <option>Deluxe Room</option>
                            <option>Accessible Room</option>
                        </select>
                        <label className="text-base font-medium mx-0 my-2.5">Bed type:</label>
                        <select onChange={(e) => setBedType(e.target.value)} className="w-[360px] h-[30px]">
                            <option>Double Bed</option>
                            <option>2 Single Beds</option>
                            <option>1 Extra-large Double Bed</option>
                        </select>

                        <button className=" font-bold rounded-md bg-sky-950 w-[100px] mx-0 my-10" onClick={updateRoom}>Update</button>
                        <button className=" font-bold rounded-md bg-sky-950 w-[100px] mx-0 my-10" onClick={deleteRoom}>Delete</button>
                        <button className=" font-bold rounded-md bg-sky-950 w-[100px] mx-0 my-10" onClick={deleteRoom}>Close</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default ViewModal