import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

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
      const response = await getDocs(collection(db, "rooms"))
      const rooms = response.docs.map((doc) => doc.data()?.room)
      return {
        status: 200,
        message: "Room fetched successfully",
        body: rooms,
      };
    } catch (e) {
      return {
        status: 500,
        message: "Error fetching rooms: " + e,
      };
    }
  },
};
