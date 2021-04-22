import React, { Fragment } from 'react'
import NewsFeed from '../components/Home/NewsFeed';
import NewsSection from '../components/Home/NewsSection';
import QuickLaunch from '../components/Home/QuickLaunch';

const Home = () => {
    return (
        <Fragment>
            <QuickLaunch />
            <NewsSection />
            <NewsFeed />
        </Fragment>
    )
}

export default Home
