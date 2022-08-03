import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import { MenuContext } from '../../App';
import Icon from '../IconsGenerator';

const Header = () => {
  const { searchValue, setSearchValue, setCurrentPage } = React.useContext(MenuContext);
  const inputRef = React.useRef();

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/">
            <Icon name="logo"></Icon>
          </Link>
          <div className={styles.input}>
            <input
              ref={inputRef}
              className={styles.input}
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => onChangeSearchValue(e)}
            />
            {searchValue && (
              <div className={styles.close} onClick={onClickClear}>
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
