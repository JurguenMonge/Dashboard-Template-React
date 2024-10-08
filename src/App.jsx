import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Layout from './layout/Layout';
import Routines from './pages/Routines';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); 

  return (
    <>
      <Routes>
        <Route element={<Layout/> }>
          <Route path="/" element={<Dashboard />} index/>
          <Route path="/routines" element={<Routines />} />
        </Route>
       
      </Routes>
    </>
  );
}

export default App;
