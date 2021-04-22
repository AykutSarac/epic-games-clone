import React from 'react'
import Moment from 'react-moment'
import newsData from '../../assets/News/newsData.json'
import './NewsFeed.css'


const NewsFeed = () => {
    return (
        <section className="newsfeed">
            <ul>
                {newsData.slice(3).map(newsItem => (
                    <li key={newsItem._id}>
                        <a href={'https://www.epicgames.com/store/en-US' + newsItem.url} key={newsItem._id}>
                            <img src={newsItem._images_[0]} alt="game" />
                            <div className="desc">
                                <Moment date={newsItem.lastModified} filter={(d) => d.replace(' days', 'D').replace(' hours', 'H').toUpperCase()} fromNow />
                                {newsItem.title}
                                <span className="readmore">
                                    Read more
                            </span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default NewsFeed
