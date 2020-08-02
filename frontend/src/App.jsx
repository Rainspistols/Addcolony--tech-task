import React, { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Weather from './components/Weather';
import Todos from './components/Todos';
import { fetchAllTodos } from './redux/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <div className='App'>
      <MainLayout aside={<Weather />} main={<Todos />} />
    </div>
  );
}

export default App;
