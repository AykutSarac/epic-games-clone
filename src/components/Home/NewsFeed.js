import React from 'react'
import Moment from 'react-moment'
import newsData from '../../assets/News/newsData.json'
import styles from './NewsFeed.module.css'


const NewsFeed = () => {
    return (
        <section className={styles.NewsFeed}>
            <ul>
                {newsData.slice(3).map(newsItem => (
                    <li key={newsItem._id}>
                        <a href={'https://www.epicgames.com/store/en-US' + newsItem.url} key={newsItem._id}>
                            <img src={newsItem._images_[0]} alt="game" />
                            <div className={styles.Description}>
                                <Moment date={newsItem.lastModified} filter={(d) => d.replace(' days', 'D').replace(' hours', 'H').toUpperCase()} fromNow />
                                {newsItem.title}
                                <span className={styles.ReadMore}>
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
