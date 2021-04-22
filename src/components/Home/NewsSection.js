import React, { Fragment } from 'react'
import Moment from 'react-moment'
import newsData from '../../assets/News/newsData.json'
import './NewsSection.css'

const NewsSection = () => {
    return (
        <Fragment>
            <p>News</p>
            <section className="news-list">
                {newsData.slice(0, 2).map(newsItem => (
                    <a className="card" href={'https://www.epicgames.com/store/en-US' + newsItem.url} key={newsItem._id}>
                        <img src={newsItem._images_[0]} alt="game" />
                        <span className="timestamp"><Moment date={newsItem.lastModified} filter={(d) => d.replace(' days', 'D').replace(' hours', 'H').toUpperCase()} fromNow /></span>
                        <span className="description">{newsItem.title}</span>
                        <span className="readmore">Read more</span>
                    </a>
                ))}
            </section>
        </Fragment>
    )
}

export default NewsSection
