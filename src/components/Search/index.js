import React from 'react';
import debounce from 'lodash.debounce';
import styles from '../Header/Header.module.scss';
import { MenuContext } from '../../App';
import Icon from '../IconsGenerator';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue, setCurrentPage } = React.useContext(MenuContext);
  const inputRef = React.useRef();

  const debouncedSearch = React.useMemo(
    () =>
      debounce((val) => {
        setSearchValue(val);
      }, 450),
    [setSearchValue],
  );

  const onChangeSearchValue = React.useCallback(
    (e) => {
      setValue(e.target.value);
      debouncedSearch(e.target.value);
      setCurrentPage(1);
    },
    [debouncedSearch, setCurrentPage],
  );

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.input}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Search..."
        value={value}
        onChange={onChangeSearchValue}
      />
      {value && (
        <div className={styles.close} onClick={onClickClear}>
          <Icon name="close" />
        </div>
      )}
    </div>
  );
};

export default Search;
