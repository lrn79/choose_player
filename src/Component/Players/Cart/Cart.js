import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name } = props.cart;
    console.log(props)
    // const [Draw, setDraw] = useState([]);
    // const drafts = (playerDraft) => {
    //     const draft = Math.floor(Math.random() * playerDraft.length);
    //     const pickedPlayer = Draw[draft];
    //     setDraw(pickedPlayer)
    // }
    return (
        <div className='cart'>
            <h2>Choose your Player </h2>
            <h2>Bot suggestion is :- {name}</h2>
            <p className='player_style'>Select player:{props.cart.map(playerName => <li>{playerName.name}</li>)}</p>
            <div>
                <button onClick={() => props.cart}>
                    Chose your player
                </button>
                <button >
                    reset
                </button>
            </div>
        </div >
    );
};

export default Cart;