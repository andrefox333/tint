import React, { PureComponent } from 'react';
import styles from '../css/author.css';

export default class Author extends PureComponent {
  render() {
    const { author } = this.props;
    const parsedAuthor = JSON.parse(author);

    return (
      <div className={styles['author-container']}>
        <div className={styles.meta}>
          <div className={styles.name}>
            {parsedAuthor.name}
          </div>
          <div className={styles.username}>
            @{parsedAuthor.username}
          </div>
          <div className={styles.followers}>
            {parsedAuthor.followers} followers
          </div>
        </div>
        <div className={styles.icon}>
          <img src={parsedAuthor.picture} />
        </div>
      </div>
    );
  }
}
