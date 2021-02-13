import React, { useEffect, useState } from "react"
import axios from "axios"
import "./profile.scss"

const Profile = ({ id }) => {
  const [name, setName] = useState()
  const [activity, setActivity] = useState()
  const [picture, setPicture] = useState()
  const [state, setState] = useState()
  const [gamertag, setGamertag] = useState()

  const profileData = {
    profileUsers: [
      {
        id: "2533274930867601",
        hostId: "2533274930867601",
        settings: [
          {
            id: "GameDisplayPicRaw",
            value:
              "https://images-eds-ssl.xboxlive.com/image?url=z951ykn43p4FqWbbFvR2Ec.8vbDhj8G2Xe7JngaTToBrrCmIEEXHC9UNrdJ6P7KIFXxmxGDtE9Vkd62rOpb7JYytJs0zQpiRDFeSD6p5l2kOyVTfofNoWHQ3kBw32EYt&format=png",
          },
          {
            id: "Gamerscore",
            value: "16670",
          },
          {
            id: "Gamertag",
            value: "mouseKiller2012",
          },
          {
            id: "AccountTier",
            value: "Gold",
          },
          {
            id: "XboxOneRep",
            value: "GoodPlayer",
          },
          {
            id: "PreferredColor",
            value:
              "http://dlassets.xboxlive.com/public/content/ppl/colors/00014.json",
          },
          {
            id: "RealName",
            value: "phillip franklin",
          },
          {
            id: "Bio",
            value: "",
          },
          {
            id: "Location",
            value: "",
          },
        ],
        isSponsoredUser: false,
      },
    ],
  }

  const data = [
    {
      xuid: "2619057640464717",
      state: "Offline",
      lastSeen: {
        deviceType: "WindowsOneCore",
        titleId: "1022622766",
        titleName: "Online",
        timestamp: "2021-02-12T23:00:37.3936521Z",
      },
    },
  ]

  useEffect(() => {
    if (data) {
      const { devices, state: s } = data[0]
      setState(s)

      if (s === "Online") {
        const { titles } = devices[0]
        const recent = titles.pop()

        const { activity, name } = recent
        const { richPresence } = activity
        setName(name)
        setActivity(richPresence)
      }
    }
  }, [data])

  useEffect(() => {
    if (profileData) {
      const { profileUsers } = profileData
      const { settings } = profileUsers[0]
      const { value: picture } = settings.find(
        o => o.id === "GameDisplayPicRaw"
      )
      const { value: gamertag } = settings.find(o => o.id === "Gamertag")
      setPicture(picture)
      setGamertag(gamertag)
    }
  }, [profileData])

  return (
    <div className="profile">
      <div className="flex">
        <img src={picture} style={{ borderRadius: "999rem", width: "60px" }} />
        <p>{gamertag}</p>
        <p>{name}</p>
        <p>{activity}</p>
      </div>
      <p className={state}>{state}</p>
    </div>
  )
}

export default Profile
