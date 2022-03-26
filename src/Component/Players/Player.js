import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, img, price } = props.player;
    return (
        <div className='player'>
            <img src={img} alt="" srcset="" />
            <div className='player_info'>
                <p className='player_name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.player)} className='btn-cart' >
                <p className='btn-txt'>Add To Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Player;