import React from 'react';
import debounce from 'lodash.debounce';
import styles from '../Header/Header.module.scss';
import Icon from '../IconsGenerator';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  const debouncedSearch = React.useMemo(
    () =>
      debounce((val) => {
        dispatch(setSearchValue(val));
      }, 450),
    [dispatch],
  );

  const onChangeSearchValue = React.useCallback(
    (e) => {
      setValue(e.target.value);
      debouncedSearch(e.target.value);
    },
    [debouncedSearch],
  );

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.input}>
      <input ref={inputRef} placeholder="Search..." value={value} onChange={onChangeSearchValue} />
      {value && (
        <div className={styles.close} onClick={onClickClear}>
          <Icon name="close" />
        </div>
      )}
    </div>
  );
};

export default Search;
