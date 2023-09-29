import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import {Home} from './components/Home';
import HomePageWithShortExport from './components/HomePageWithShortExport';

// RouteScreen1.js это скрин с TextContainer 
import RouteScreen1 from './components/RouteScreen1'; 

import {PageWithMsg} from './components/PageWithMsg';
import {SimpleComponentEs6} from './components/SimpleComponentEs6';
import {PageWithManyProps} from './components/PageWithManyProps';

export default function App() {
  return (
    <Layout>
      {/* Route - инструмент для связи экранов с url
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
        {/* в SimpleComponentEs6 используется через {this.props.msg} */}
        <Route path="/page-with-props-es6" element={<SimpleComponentEs6 msg="MESSAGE from SimpleComponentEs6"/>} />
        <Route path="/page-with-prop"
              element={<PageWithMsg msg="MESSAGE from PageWithMsg"/>} />

        {/* в PageWithManyProps определен как function PageWithManyProps(props) {...}
           доступ к значениям props через {props.prop1},{props.prop2} */}
        <Route path="/page-with-many-props"
              element={<PageWithManyProps prop1="val_prop1" prop2="val_prop2"/>} />
      </Routes>
    </Layout>
  );
}
