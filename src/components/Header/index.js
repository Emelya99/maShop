import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import { SearchContext } from '../../App';
import Icon from '../IconsGenerator';

const Header = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  console.log(searchValue);
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/">
            <Icon name="logo"></Icon>
          </Link>
          <div className={styles.input}>
            <input
              className={styles.input}
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue && (
              <div className={styles.close} onClick={() => setSearchValue('')}>
                <Icon name="close" />
              </div>
            )}
          </div>
          <Link to="/cart" className={styles.cart}>
            <span>1000 $</span>
            <Icon name="cart"></Icon>
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
