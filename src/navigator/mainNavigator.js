import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19041Navigator from '../features/BlankScreen19041/navigator';
import BlankScreen19040Navigator from '../features/BlankScreen19040/navigator';
import BlankScreen68765Navigator from '../features/BlankScreen68765/navigator';
import BlankScreen58764Navigator from '../features/BlankScreen58764/navigator';
import BlankScreen48763Navigator from '../features/BlankScreen48763/navigator';
import BlankScreen38762Navigator from '../features/BlankScreen38762/navigator';
import BlankScreen28758Navigator from '../features/BlankScreen28758/navigator';
import BlankScreen18688Navigator from '../features/BlankScreen18688/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen19041: { screen: BlankScreen19041Navigator },
BlankScreen19040: { screen: BlankScreen19040Navigator },
BlankScreen68765: { screen: BlankScreen68765Navigator },
BlankScreen58764: { screen: BlankScreen58764Navigator },
BlankScreen48763: { screen: BlankScreen48763Navigator },
BlankScreen38762: { screen: BlankScreen38762Navigator },
BlankScreen28758: { screen: BlankScreen28758Navigator },
BlankScreen18688: { screen: BlankScreen18688Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
