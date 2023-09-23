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
        {/* КАК ОФОРМИТЬ сам пункт меню  описано в navItems.js.
          Связь через path.
          path также будет с строке браузера.
        . RouteScreen1 отображать при выборе в /route-from-navitems*/}
        <Route path="/route-from-navitems" element={<RouteScreen1 />} />
      </Routes>
    </Layout>
  );
}
