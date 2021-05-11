import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleFriendlist } from '../actions/layoutActions'
import NewsFeed from '../components/Home/NewsFeed/NewsFeed';
import NewsSection from '../components/Home/NewsSection/NewsSection';
import QuickLaunch from '../components/Home/QuickLaunch/QuickLaunch';

const Home = ({ toggleFriendlist }) => {

  useEffect(() => {
    toggleFriendlist(true);
    
    //eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: 'calc(100% - 375px)' }}>
      <QuickLaunch />
      <NewsSection />
      <NewsFeed></NewsFeed>
    </div>
  )
}

export default connect(null, { toggleFriendlist })(Home)
