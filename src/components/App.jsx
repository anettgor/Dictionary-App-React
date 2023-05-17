import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import { fetchWord } from './../redux/operations';
import { getError, getLoading } from './../redux/selectors';

const Result = lazy(() => import('./Result/Result'));
const Header = lazy(() => import('./Header/Header'));
const Search = lazy(() => import('./Search/Search'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchWord('source'));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ margin: 20 }}>
      <Suspense fallback={<div> Loading...</div>}>
        <Header />
        <Search />
      </Suspense>

      <Suspense fallback={<div> Loading...</div>}>
        {!error ? <Result /> : <NotFound />}
      </Suspense>
    </div>
  );
};
