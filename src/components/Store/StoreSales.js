import React from 'react'
import newsData from '../../assets/News/newsData.json'
import './StoreSales.css'

const StoreSales = () => {
    return (
        <section className="sales">
            <h3>Games On Sale</h3>
            <ul className="saleslist">
                {newsData.slice(6, 10).map((game) => (
                    <li key={game._id} className="card">
                        <a href={'https://www.epicgames.com/store/en-US' + game.url}>
                            <img src={game._images_[0]} alt="sales game" />
                            <div className="card-text">
                                <p>{game._title.split(' ').slice(0, 4).join(' ')}<br /><span className="author">{game.author ? game.author : 'Game Author'}</span></p>
                                <span className="pricetag">-25%</span><span className="oldprice">50 $</span> 37 $
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default StoreSales
