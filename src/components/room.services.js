import { db } from "../config/firebase";
import { 
    collection, 
    getDoc,
    updateDoc,
    doc,
} from "firebase/firestore";

const roomCollectionRef = collection(db, "hotelRooms");

class RoomDataService {
    updateRoom = (id, updatedRoom) => {
        const roomDoc = doc(db, "hotelRooms", id);
        return updateDoc(roomDoc, updatedRoom );
    };


    getRoom = (id) => {
        const roomDoc = doc(db, "hotelRooms", id);
        return getDoc(roomDoc)
    }
}

export default new RoomDataService();


