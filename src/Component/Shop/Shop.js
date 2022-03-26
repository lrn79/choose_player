import React, { useEffect, useState } from 'react';
import Player from '../Players/Player';
import './Shop.css'

const Shop = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);
    const handleAddToCart = (player) => {
        console.log(player)
        const newCart = [...cart, player]
        setCart(newCart)
    }
    return (
        <div className='shop_container'>
            <div className='players_container'>
                {
                    players.map(player => <Player
                        player={player}
                        key={player.id}
                        handleAddToCart={handleAddToCart}
                    ></Player>)
                }
            </div>
            <div className='cart container'>
                <h2>Choose your Player </h2>
                <p>Select player:{cart.map(playerName => playerName.name)}</p>
            </div>
        </div>
    );
};

export default Shop