import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './App.module.css';
import { setStatusSearch } from './../redux/searchSlice';
import { fetchWord } from './../redux/operations';
import { getError, getLoading } from './../redux/selectors';

const Result = lazy(() => import('./Result/Result'));
const Header = lazy(() => import('./Header/Header'));
const Search = lazy(() => import('./Search/Search'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

const MemoizedResult = React.memo(Result);

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchWord('source'));
    dispatch(setStatusSearch('source'));
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Suspense fallback={<div> Loading...</div>}>
        <Header />
        <Search />
      </Suspense>

      <Suspense fallback={<div> Loading...</div>}>
        {loading ? (
          <div>Loading</div>
        ) : !error ? (
          <MemoizedResult />
        ) : (
          <NotFound />
        )}
      </Suspense>
    </div>
  );
};
