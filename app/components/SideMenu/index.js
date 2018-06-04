import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

import UserMenu from './partials/UserMenu';

const user = {
  firstName: 'Alexis',
  lastName: 'Lindgren',
  role: 'admin',
  birthDate: new Date('1995-05-08').getTime()
};

export default class SideMenu extends Component {

  render() {
    return (
      <div className={styles['side-menu']}>
        <UserMenu user={user}/>
      </div>
    )
  }

}

SideMenu.propTypes = {
  pages: PropTypes.array.isRequired
};