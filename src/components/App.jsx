import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWord } from './../redux/operations';

import { Suspense, lazy } from 'react';

const Result = lazy(() => import('./Result/Result'));
const Header = lazy(() => import('./Header/Header'));
const Search = lazy(() => import('./Search/Search'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWord('source'));
  }, [dispatch]);

  return (
    <div style={{ margin: 20 }}>
      <Suspense fallback={<div> Loading...</div>}>
        <Header />
        <Search />
      </Suspense>

      <Suspense fallback={<div> Loading...</div>}>
        <Result />
      </Suspense>
    </div>
  );
};
