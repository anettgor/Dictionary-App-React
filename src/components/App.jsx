import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import css from './App.module.css';
import { fetchWord } from './../redux/operations';
import { getError } from './../redux/selectors';

const Result = lazy(() => import('./Result/Result'));
const Header = lazy(() => import('./Header/Header'));
const Search = lazy(() => import('./Search/Search'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

const MemoizedResult = React.memo(Result);

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchWord('source'));
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Suspense fallback={<div> Loading...</div>}>
        <Header />
        <Search />
      </Suspense>

      <Suspense fallback={<div> Loading...</div>}>
        {!error ? <MemoizedResult /> : <NotFound />}
      </Suspense>
    </div>
  );
};
