import React, { useEffect, useState } from 'react';
import Cart from '../Players/Cart/Cart';
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
    const drafts = (playerDraft) => {
        const draft = Math.floor(Math.random() * playerDraft.length);
        const pickedPlayer = cart[draft];
        setCart([pickedPlayer])
    }
    // handke reset btn
    const reset = (PlayerReset) => {
        PlayerReset = [];
        setCart(PlayerReset)
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
            <div className='cart_container'>
                <Cart cart={cart}
                    drafts={drafts}
                    reset={reset}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop