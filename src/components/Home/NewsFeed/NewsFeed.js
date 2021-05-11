import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import styles from './NewsFeed.module.css'
import PropTypes from 'prop-types'

const NewsFeed = ({ newsData }) => {
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
                                <span className={styles.ReadMore}>Read more</span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

NewsFeed.propTypes = {
    newsData: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    newsData: state.layout.newsData
});

export default connect(mapStateToProps, null)(NewsFeed)
