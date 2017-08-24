import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './main.css';

const cx = classNames.bind(styles);

const App = ({ children }) => {
  return (
    <div className={cx('app')}>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object,
};

export default App;
