import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './StoreSlider.module.css'
import PropTypes from 'prop-types'

const StoreSlider = ({ newsData }) => {

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
        <div className={styles.sliderWrapper}>
            <div className={styles.featured} style={{ backgroundImage: `url(${gameList[counter]._images_[0]})` }}>
                <div className={styles.itemText}>
                    <h3>{gameList[counter].title}</h3>
                    <div className={styles.buttons}>
                        <a href="#!" className={`${styles.btn} ${styles.btnDownload}`}>DOWNLOAD NOW</a>
                        <a href="#!" className={`${styles.btn} ${styles.btnWishlist}`}>+</a>
                    </div>
                </div>

            </div>
            <ul className={styles.gamelist}>
                {gameList.map((game, index) => (
                    <li key={game._id} onClick={onClick} style={{ display: 'block' }} >
                        <div id={index} className={`${styles.game} ${index === counter ? styles.current : ''}`}>
                            <img src={game._images_[0]} alt="game" />
                       { game.title.split(' ').slice(0, 4).join(' ') }...
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

StoreSlider.propTypes = {
    newsData: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    newsData: state.layout.newsData
});

export default connect(mapStateToProps, null)(StoreSlider)
