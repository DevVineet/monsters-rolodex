import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt={`monster ${props.monster.id}`}/>
            <h1>
                {props.monster.name}
            </h1>
            <p>
                {props.monster.email}
            </p>
        </div>
    )
}