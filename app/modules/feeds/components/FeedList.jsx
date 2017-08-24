import React, { Component } from 'react';
import FeedItem from './FeedItem';
import styles from '../css/feed-list.css';

export default class FeedList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className={styles.container}>
        {list.map((item) => {
          return <FeedItem key={item.social_post_id} item={item} />;
        })}
      </div>
    );
  }
}
