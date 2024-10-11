import React, { useEffect, useState } from 'react'

export default function Header() {
    const [dateTime,setDateTime] = useState("");
    useEffect(() => {
        const interval = setInterval( () => {
  
          let DT = new Date();
          const date = DT.toLocaleDateString();
          let time = DT.toLocaleTimeString();
          setDateTime(`${date} - ${time}`)
  
        },1000)
  
        return () => clearInterval(interval)
  
      },[])
  return (
    <div>
      <header>
        <h2 className="title"><span>T</span>odo <span>L</span>ist</h2>
        <p>{dateTime}</p>
      </header>
    </div>
  )
}
