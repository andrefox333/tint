import React, { PureComponent } from 'react';
import styles from '../css/load-more.css';

class LoadMore extends PureComponent {
  render() {
    const { hasNextPage, handleLoadMore } = this.props;
    if (!hasNextPage) return null;
    return (
      <div className={styles['load-more-container']}>
        <button
          className={styles.button}
          type="button"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    );
  }
}

export default LoadMore;
