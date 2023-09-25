import { HomeSVGIcon, TvSVGIcon, SmsSVGIcon, PagesSVGIcon } from 'react-md';

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

// ОФОРМЛЕНИЕ и ПРИВЯЗКА только МЕНЮ маршрутов. Вся механика в App.js
// navItems используется только в Layouts.js
const navItems = {
  '/': createRoute('/', 'Home', <HomeSVGIcon />),

  // 'http://localhost:3000/route-from-navitems' - path в browser
  // 'Title item1' - название пункта в меню
  // any name for developer похоже какое-то любое имя. что-то типа коммента
  // все важное в createRoute()

  // /route-from-navitems - path в браузере.
  // Д.б. описан в  App/Layout/Routes/Route, как
  //     <Route path="/route-from-navitems" element={<RouteScreen1 />} />
  // Здесь описание ОТОБРАЖЕНИЯ пункта.
  // Связано по ключу "/route-from-navitems" с параметром "path" из App/Routes/Route
  'any name for developer': createRoute('/route-from-navitems', 'Title item1', <TvSVGIcon />),

  'short export': createRoute('/short-export', 'Home with short export', <SmsSVGIcon />),
  'page with props': createRoute('/page-with-props', 'Page with props', <PagesSVGIcon />),
};

export default navItems;
