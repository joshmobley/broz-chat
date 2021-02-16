import React, { useEffect, useState } from "react"
import axios from "axios"
import "./profile.scss"

const Profile = ({ id }) => {
  const [name, setName] = useState()
  const [activity, setActivity] = useState()
  const [picture, setPicture] = useState()
  const [state, setState] = useState("Offline")

  const getData = async () => {
    try {
      const req = await axios.get(`https://xapi.us/v2/${id}/new-profile`, {
        headers: {
          "X-AUTH": "2cb05df5bfb37e791c7c8a8f3d5831072fe1d0a8",
        },
      })

      const { data: profile } = req

      const {
        displayPicRaw: avatar,
        gamertag,
        presenceState: s,
        presenceText: happeningNow,
      } = profile

      if (happeningNow) {
        setActivity(happeningNow)
      }

      const sslPicture = avatar.replace(
        "http://images-eds",
        "https://images-eds-ssl"
      )
      setState(s)
      setName(gamertag)
      setPicture(sslPicture)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="profile">
      <div className="flex">
        {picture ? (
          <img
            src={picture}
            className="loader picture"
            style={{ width: "60px", borderRadius: "999rem" }}
          />
        ) : (
            <div className="loader picture" />
          )}
        {name ? (
          <p style={{ width: "200px" }}>{name}</p>
        ) : (
            <div
              className="loader"
              style={{ width: "150px", marginRight: "70px" }}
            />
          )}
        {activity ? (
          <p>{activity}</p>
        ) : (
            <div className="loader" style={{ width: "150px" }} />
          )}
      </div>
      <p className={state}>{state}</p>
    </div>
  )
}

export default Profile
