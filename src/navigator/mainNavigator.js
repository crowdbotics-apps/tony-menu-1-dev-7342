import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen38762Navigator from '../features/BlankScreen38762/navigator';
import BlankScreen28758Navigator from '../features/BlankScreen28758/navigator';
import BlankScreen18688Navigator from '../features/BlankScreen18688/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
