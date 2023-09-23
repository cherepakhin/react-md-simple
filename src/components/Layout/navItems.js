import { HomeSVGIcon, TvSVGIcon } from 'react-md';

/**
 * Note: The `parentId` **must** be defaulted to `null` for the navigation tree
 * to render correctly since this uses the @react-md/tree package behind the
 * scenes. Each item that has a `parentId` set to `null` will appear at the root
 * level of your navigation tree.
 */
function createRoute(pathname, children, leftAddon, parentId = null) {
  return {
    itemId: pathname,
    parentId,
    to: pathname,
    children,
    leftAddon,
  };
}

// ОФОРМЛЕНИЕ только МЕНЮ маршрутов. Вся механика в App.js
const navItems = {
  '/': createRoute('/', 'Home', <HomeSVGIcon />),

  // 'http://localhost:3000/route-from-navitems' - path в browser
  // 'Route 1' - название пункта в меню
  // any name for developer похоже какое-то любое имя. что-то типа коммента
  // все важное в createRoute()

  // /route-from-navitems - path в браузере.
  // Д.б. описан в  App/Layout/Routes/Route, как
  //     <Route path="/route-from-navitems" element={<RouteScreen1 />} />
  // Здесь описание ОТОБРАЖЕНИЯ пункта и связь по "/route-from-navitems" с path из App/Routes/Route
  'any name for developer': createRoute('/route-from-navitems', 'Route 1', <TvSVGIcon />),
};

export default navItems;
