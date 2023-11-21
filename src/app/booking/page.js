
'use client'

import { ROOM } from "@/services/roomService"
import { useEffect, useState } from "react"

const Booking = () => {
  const [roomList, setRoomList] = useState([])

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await ROOM.FETCH()
      setRoomList(response?.body)
    }
    fetchRoom()
  }, [])
console.log(roomList)
 
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        { roomList?.map((room, index)=> { return (<div key={index}>{room?.name} </div>) })}
      </div>
    </div>
    )
  }
  
  export default Booking