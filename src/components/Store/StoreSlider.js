import React, { useEffect, useState } from 'react'
import newsData from '../../assets/News/newsData.json'
import './StoreSlider.css'

const StoreSlider = () => {

    const gameList = newsData.slice(0, 6);
    const [counter, setCounter] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            if (counter === gameList.length - 1) return setCounter(0);
            setCounter(parseInt(counter+1));
        }, 8000);

        return () => clearInterval(interval);
    }, [gameList.length, counter]);


    // Change current slide
    const onClick = (e) => {
        let value = parseInt(e.target.closest('div').id);
        if (value !== counter) setCounter(value);
    }


    return (
        <div className="slider-wrapper">
            <div className="featured" style={{ backgroundImage: `url(${gameList[counter]._images_[0]})` }}>
                <div className="item-text">
                    <h3>{gameList[counter].title}</h3>
                    <div className="buttons">
                        <a href="#!" className="btn btn-download">DOWNLOAD NOW</a>
                        <a href="#!" className="btn btn-wishlist">+</a>
                    </div>
                </div>

            </div>
            <ul className="gamelist">
                {gameList.map((game, index) => (
                    <li key={game._id} onClick={onClick} style={{ display: 'block' }} >
                        <div id={index} className={`game ${index === counter ? 'current' : ''}`}>
                            <img src={game._images_[0]} alt="game" />
                       { game.title.split(' ').slice(0, 4).join(' ') }...
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StoreSlider
