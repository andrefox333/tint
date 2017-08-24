import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Author from './Author';
import styles from '../css/feed-item.css';

class Card extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  gotoProfile = () => {
    const { item: { author } } = this.props;
    const parsedAuthor = JSON.parse(author);
    window.location = parsedAuthor.link;
  };

  render() {
    const { item } = this.props;
    const backgroundImage = `url(${item.image})`;
    return (
      <div className={styles.item} onClick={this.gotoProfile}>
        <div className={styles.overlay} />
        <div className={styles.thumbnail} style={{ backgroundImage }} />
        <div className={styles.comment}>
          {item.title}
        </div>
        <Author author={item.author} />
      </div>
    );
  }
}

export default Card;
