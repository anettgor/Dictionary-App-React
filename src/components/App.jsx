import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWord } from './../redux/operations';
import { getLoading, getWord } from 'redux/selectors';
import { useSelector } from 'react-redux';

import Result from './Result/Result';
import Header from './Header/Header';
import Search from './Search/Search';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWord('source'));
  }, [dispatch]);

  const isLoading = useSelector(getLoading);
  const items = useSelector(getWord);

  return (
    items.length > 0 &&
    !isLoading && (
      <div style={{ margin: 20 }}>
        <Header />
        <Search />
        <Result />
      </div>
    )
  );
};
