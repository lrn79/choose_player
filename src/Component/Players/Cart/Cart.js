import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { reset } = props;
    const { drafts } = props;
    console.log(props)
    // const [Draw, setDraw] = useState([]);
    // const drafts = (playerDraft) => {
    //     const draft = Math.floor(Math.random() * playerDraft.length);
    //     const pickedPlayer = Draw[draft];
    //     setDraw(pickedPlayer)
    // }
    return (
        <div className='cart'>
            <h2 className='chosse_player'>Choose your Players </h2>
            <h3>Selected Players</h3>
            <p className='player_style'>{props.cart.map(playerName => <li className='player_name_style'>{playerName.name}</li>)}</p>
            <div className='Cart-btn'>
                <button onClick={() => drafts(props.cart)}>
                    Bot Suggestion
                </button>
                <button onClick={() => reset(props.cart)} >
                    reset
                </button>
            </div>
        </div >
    );
};

export default Cart;