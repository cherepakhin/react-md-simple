import { Link, useLocation } from 'react-router-dom';
import {
  ArrowDropDownSVGIcon,
  ArrowUpwardSVGIcon,
  CheckBoxSVGIcon,
  CheckSVGIcon,
  Configuration,
  ErrorOutlineSVGIcon,
  FileUploadSVGIcon,
  KeyboardArrowDownSVGIcon,
  KeyboardArrowLeftSVGIcon,
  KeyboardArrowRightSVGIcon,
  Layout as RMDLayout,
  MenuSVGIcon,
  NotificationsSVGIcon,
  RadioButtonCheckedSVGIcon,
  RemoveRedEyeSVGIcon,
  useLayoutNavigation,
} from 'react-md';

import navItems from './navItems';

const icons = {
  back: <KeyboardArrowLeftSVGIcon />,
  checkbox: <CheckBoxSVGIcon />,
  dropdown: <ArrowDropDownSVGIcon />,
  error: <ErrorOutlineSVGIcon />,
  expander: <KeyboardArrowDownSVGIcon />,
  forward: <KeyboardArrowRightSVGIcon />,
  menu: <MenuSVGIcon />,
  notification: <NotificationsSVGIcon />,
  password: <RemoveRedEyeSVGIcon />,
  radio: <RadioButtonCheckedSVGIcon />,
  selected: <CheckSVGIcon />,
  sort: <ArrowUpwardSVGIcon />,
  upload: <FileUploadSVGIcon />,
};

export default function Layout({ children }) {
  console.log("START Layout");
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Configuration icons={icons}>
      {/* из Layout импортировали все в виде объекта с именем RMDLayout */}
      {/* temporary - тип размещения. Для всех устройств выбран одно и тоже размещение.
      Демо разных вариантов отображеия: https://react-md.dev/packages/layout/demos
      */}
      <RMDLayout
        tabletLayout="temporary"
        landscapeTabletLayout="temporary"
        desktopLayout="temporary"
        largeDesktopLayout="temporary"
        treeProps={useLayoutNavigation(navItems, pathname, Link)}
      >
        {children}
      </RMDLayout>
    </Configuration>
  );
}
