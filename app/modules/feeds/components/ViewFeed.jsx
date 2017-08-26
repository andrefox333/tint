import React, { Component } from 'react';
import { connect } from 'react-redux';

import FeedList from './FeedList';
import UserInputField from './UserInputField';
import LoadMore from './LoadMore';
import * as actions from '../actions';
/**
 * ViewFeed is the main container component that holds of the necessary components
 */
export class ViewFeed extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getUserFeeds('helloandrefox'));
  }

  /**
   * Dispatches an action to get the feed for the given profile
   * @param {String} profile
   * @param {String} source
   */
  handleBtnClick = (profile, source) => {
    const { dispatch } = this.props;
    dispatch(actions.getUserFeeds(profile, source));
  };

  /**
   * Dispatches an action to fetch the next page of data
   */
  handleLoadMore = () => {
    const { dispatch, nextPageUrl } = this.props;
    dispatch(actions.loadMore(nextPageUrl));
  };

  render() {
    const { hasNextPage, list } = this.props;
    return (
      <div className="container">
        <UserInputField onBtnClick={this.handleBtnClick} />
        <FeedList list={list} />
        <LoadMore 
          hasNextPage={hasNextPage}
          handleLoadMore={this.handleLoadMore}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.feeds.list,
    nextPageUrl: state.feeds.nextPageUrl,
    hasNextPage: state.feeds.hasNextPage,
  };
}

export default connect(mapStateToProps)(ViewFeed);
