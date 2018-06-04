import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class Hamburger extends Component {

  render() {
    return (
      <div className={styles['container']} onClick={this.props.onClick}>
        <div className={styles['bar']} />
        <div className={styles['bar']} />
        <div className={styles['bar']} />
      </div>
    )
  }

}

Hamburger.propTypes = {
  onClick: PropTypes.func
};