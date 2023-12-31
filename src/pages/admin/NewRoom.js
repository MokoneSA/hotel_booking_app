import React, { useEffect, useState } from 'react';
import '../../styles/adminhome.css';

// Importing components
import Navbar from '../../components/navbar/AdminNavbar';
import Header from '../../components/HeroSec';
import Footer from '../../components/Footer';

// Firebase functions
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

import { storage } from '../../config/firebase';
import { ref, uploadBytes, list, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';


export const AdminHome = () => {

    // const [room, setRoom] = useState('');;
    const [hotel, setHotel] = useState('')
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [roomType, setRoomType] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState('');
    const [contact, setContact] = useState('');
    const [bedType, setBedType] = useState('');
    const [file, setFile] = useState();
    const [imageUrl, setImageUrl] = useState('');

    const imageListRef = ref(storage, "hotelImages/")

    // handle for adding a room
    const handleAdd = (async (e) => {
        e.preventDefault()

        // saving data to firebase firestore db
        try {
            const docRef = await addDoc(collection(db, "hotelRooms"), {
                hotel: hotel,
                title: title,
                description: description,
                address: address,
                contact: contact,
                price: price,
                numberOfPeople: numberOfPeople,
                numberOfRoooms: numberOfRooms,
                roomType: roomType,
                bedType: bedType,
                roomImage: imageUrl
            });
            alert('Successful');
        } catch (error) {

        }

        // upload image to firebase storage
        const uploadImage = () => {
            const imageRef = ref(storage, `hotelImages/${file.name + v4()}`);
            uploadBytes(imageRef, file).then(() => {
                getDownloadURL(imageRef).then((url) => {
                setImageUrl(url);
                alert("Image Uploaded");
            })})
        }
        uploadImage();
    })


    // useEffect(() => {
    //     list(imageListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageUrl((prev) => [...prev, url]);
    //             })
    //         })
    //     })
    // }, [])

    return (
        <div className='home-container h-screen'>
            <Navbar />
            <Header />
            <div className="admin-main-section w-[1024px] h-full flex flex-col items-center bg-[grey] m-auto">
                <h3 className="text-white text-2xl m-[30px]">Add New Room</h3>
                <form className="flex flex-row justify-center" >
                    <div className="left-side w-[450px] flex flex-col">
                        <img className="image" src={imageUrl} alt="" />
                        <input className="my-0" type="file" onChange={(e) => setFile(e.target.files[0])} />
                        <label className="text-base font-medium mx-0 my-2 mr-[30px]">Hotel</label>
                        <input
                            type="text"
                            placeholder=" Enter title..."
                            onChange={(e) => setHotel(e.target.value)}
                            required
                        />
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
                    <div className="right-side flex flex-col w-[450px]">
                        <label className="text-base font-medium mx-0 my-2.5">Contact</label>
                        <input
                            type="number"
                            placeholder=" Enter contact details..."
                            onChange={(e) => setContact(e.target.value)}
                            required
                        />
                        <label className="text-base font-medium mx-0 my-2.5">Number of rooms</label>
                        <input
                            type="number"
                            placeholder=" Enter number of rooms..."
                            onChange={(e) => setNumberOfRooms(e.target.value)}
                            required
                        />
                        <label className="text-base font-medium mx-0 my-2.5">Room type:</label>
                        <select onChange={(e) => setRoomType(e.target.value)} className="w-[360px] h-[30px]">
                            <option>Family Deluxe</option>
                            <option>Singles Deluxe</option>
                            <option>Couples Deluxe</option>
                        </select>
                        <label className="text-base font-medium mx-0 my-2.5">Bed type:</label>
                        <select onChange={(e) => setBedType(e.target.value)} className="w-[360px] h-[30px]">
                            <option>2 Single Beds</option>
                            <option>Double Bed</option>
                            <option>King Bed</option>
                            <option>Queen Bed</option>
                        </select>

                        <button className=" text-white font-bold rounded-md bg-sky-950 w-[100px] mx-0 my-10" onClick={handleAdd}>Send</button>
                    </div>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AdminHome;