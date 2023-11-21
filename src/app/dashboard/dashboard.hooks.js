'use client'
import { userServices } from "@/services/users"
import { useEffect, useState } from "react"

export const useDashboard = () => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
       const response =  await userServices.fetchUser()
       setUserData(response)
    }
    fetchUserData()
  }, [])
  

  return { userData }
}

export default useDashboard