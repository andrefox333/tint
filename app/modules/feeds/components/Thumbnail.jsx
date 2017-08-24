import React, { PureComponent } from 'react';

import styles from '../css/thumbnail.css';

export default class Thumbnail extends PureComponent {
  render() {
    const { image } = this.props;
    const backgroundImage = `url(${image})`;
    return <div className={styles.container} style={{ backgroundImage }} />;
  }
}
