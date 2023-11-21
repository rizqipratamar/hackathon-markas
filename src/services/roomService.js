import { collection, addDoc } from "firebase/firestore";
import { db } from "firebase.js";

export const ROOM = {
  ADD: async (roomData) => {
    try {
      const docRef = await addDoc(collection(db, "rooms"), {
        room: roomData,
      });
      return {
        status: 200,
        message: "Room added successfully",
        body: docRef,
      };
    } catch (e) {
      return {
        status: 500,
        message: "Error adding room: " + e,
      };
    }
  },
  FETCH: async () => {
    try {
      await getDocs(collection(db, "rooms")).then((querySnapshot) => {
        const rooms = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return {
          status: 200,
          message: "Rooms fetched successfully",
          body: rooms,
        };
      });
    } catch (e) {
      return {
        status: 500,
        message: "Error fetching rooms: " + e,
      };
    }
  },
};
