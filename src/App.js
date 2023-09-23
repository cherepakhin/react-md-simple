import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';

import RouteScreen1 from './components/RouteScreen1'; // RouteScreen1.js это скрин с TextContainer 

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* RouteScreen1.js это скрин с TextContainer  */}
        <Route path="route-1" element={<RouteScreen1 />} />
      </Routes>
    </Layout>
  );
}
