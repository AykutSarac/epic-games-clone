import React from 'react'
import { connect } from 'react-redux'
import styles from './StoreSales.module.css'

const StoreSales = ({ newsData }) => {

    const getTitle = (game) => game._title.split(' ').slice(0, 4).join(' ');

    return (
        <section className={styles.sales}>
            <h3>Games On Sale</h3>
            
            <ul className={styles.saleslist}>
                {newsData.slice(5, 10).map((game) => (
                    <li key={game._id} className={styles.card}>

                        <a href={'https://www.epicgames.com/store/en-US' + game.url}>
                            <img src={game._images_[0]} alt="sales game" />

                            <div className={styles.cardText}>
                                <p>{getTitle(game)}<br /><span className={styles.author}>{game.author ? game.author : 'Game Author'}</span></p>
                                <span className={styles.pricetag}>-25%</span><span className={styles.oldprice}>50 $</span> 37 $
                            </div>

                        </a>
                    </li>
                ))}

            </ul>
        </section>
    )
}

const mapStateToProps = (state) => ({
    newsData: state.layout.newsData
});

export default connect(mapStateToProps, null)(StoreSales)
