import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import {Home} from './components/Home';
import HomePageWithShortExport from './components/HomePageWithShortExport';

// RouteScreen1.js это скрин с TextContainer 
import RouteScreen1 from './components/RouteScreen1'; 

import {PageWithProps} from './components/PageWithProps'; 

export default function App() {
  return (
    <Layout>
      {/* Связь экранов с url
        Конфигурирование Route.
        КАК ОФОРМИТЬ сам ПУНКТ меню описано в navItems.js (cвязь через "path")
        path также будет с строке браузера.
      . element - СТРАНИЦА перехода RouteScreen1 будет отображена при выборе в /route-from-navitems
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* RouteScreen1.js это TextContainer */}
        <Route path="/route-from-navitems" element={<RouteScreen1 />} />
        <Route path="/short-export" element={<HomePageWithShortExport />} />
        <Route path="/page-with-props" element={<PageWithProps msg="aaa"/>} />
      </Routes>
    </Layout>
  );
}
