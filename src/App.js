import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';

import RouteScreen1 from './components/RouteScreen1'; // RouteScreen1.js это скрин с TextContainer 

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*
          Конфигурирование Route.
          КАК ОФОРМИТЬ сам ПУНКТ меню описано в navItems.js (cвязь через "path")
          path также будет с строке браузера.
        . element - СТРАНИЦА перехода RouteScreen1 будет отображена при выборе в /route-from-navitems
        */}
        {/* RouteScreen1.js это TextContainer */}
        <Route path="/route-from-navitems" element={<RouteScreen1 />} />
      </Routes>
    </Layout>
  );
}
