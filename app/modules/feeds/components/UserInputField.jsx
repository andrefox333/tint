import React, { Component } from 'react';
import styles from '../css/user-input-field.css';

export default class UserInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: 'helloandrefox',
    };
  }

  onInputChange = (event) => {
    this.setState({ profile: event.target.value });
  };

  render() {
    const { onBtnClick } = this.props;
    const { profile } = this.state;
    return (
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Tint Profile i.e. Tint"
          onChange={this.onInputChange}
        />
        <button
          className={styles.button}
          type="button"
          onClick={() => onBtnClick(profile)}
        >
          Change Feed
        </button>
      </div>
    );
  }
}
