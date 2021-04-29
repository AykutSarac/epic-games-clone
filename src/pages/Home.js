import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleFriendlist } from '../actions/layoutActions'
import NewsFeed from '../components/Home/NewsFeed';
import NewsSection from '../components/Home/NewsSection';
import QuickLaunch from '../components/Home/QuickLaunch';

const Home = ({ toggleFriendlist }) => {

  useEffect(() => {
    toggleFriendlist(false);
    toggleFriendlist(true);
    return () => toggleFriendlist(false);
    //eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: 'calc(100% - 400px)' }}>
      <QuickLaunch />
      <NewsSection />
      <NewsFeed />
    </div>
  )
}

export default connect(null, { toggleFriendlist })(Home)
