import React from 'react'
import './card.style.css'


export const Card = props =>
    (
        <div className='card-container'>
            <img alt="card" src={`https://robohash.org/${props.card.id}?set=set2&size=180x180`} />
            <h2>{props.card.name}</h2>
            <p>{props.card.email}</p>
        </div>
    )