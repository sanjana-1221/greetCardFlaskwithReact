import React from 'react';
import './UserDisplay.css'

const UserDisplay = (props) => {
    return (
        <div className="User">
            <h3>{props.firstName} {props.lastName}</h3>
            <p> {props.office}</p>
            <p> {props.email}</p>
            <p> {props.mobile}</p>
        </div>
    )
}

export default UserDisplay;