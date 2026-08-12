import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className="container" style={props.style}> {/* Apply the style prop to the container div that change color from white to  black*/}
      <p id="user-name">{props.name}</p>
      <img src={props.image} alt={props.name} id="user-image" />
      <p id="user-bio">{props.desc}</p>
    </div>
  )
}

export default UserCard
