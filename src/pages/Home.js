import React from 'react'
import NewsFeed from '../components/Home/NewsFeed';
import NewsSection from '../components/Home/NewsSection';
import QuickLaunch from '../components/Home/QuickLaunch';
import Friendlist from '../components/layout/Friendlist';

const Home = () => {
  return (
    <div className="homepage">
      <div>
        <QuickLaunch />
        <NewsSection />
        <NewsFeed />
      </div>
      <Friendlist />
    </div>
  )
}

export default Home
