import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import Hamburger from '../../../Hamburger';

const menuItems = [
  {
    name: 'Profile',
    onClick: () => {}
  },
  {
    name: 'Settings',
    onClick: () => {}
  },
  {
    name: 'Logout',
    onClick: () => {}
  }
];

export default class UserMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderTopBar = this.renderTopBar.bind(this);
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderTopBar() {
    return (
      <div className={styles['top-bar']}>
        <div className={styles['name']}>{`${this.props.user.firstName} ${this.props.user.lastName}`}</div>
        <div className={styles['hamburger']}>
          <Hamburger onClick={this.toggleMenu} />
        </div>
      </div>
    )
  }

  renderList() {
    return menuItems.map((item, index) => {
      return (
        <div className={styles['menu-item']} key={index}>
          <div onClick={item.onClick}>{item.name}</div>
        </div>
      )
    })
  }

  render() {
    const style = {
      container: {
        height: (this.state.isOpen? (menuItems.length * 35) + 65 : 60) + 'px'
      }
    };

    return (
      <div className={styles['user-menu']} style={style.container}>
        {this.renderTopBar()}
        {this.renderList()}
      </div>
    )
  }

}

UserMenu.propTypes = {
  user: PropTypes.object.isRequired
};