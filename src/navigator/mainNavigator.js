import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile183961Navigator from '../features/UserProfile183961/navigator';
import CopyOfBlankScreen17183868Navigator from '../features/CopyOfBlankScreen17183868/navigator';
import BlankScreen37183867Navigator from '../features/BlankScreen37183867/navigator';
import CopyOfSignUp136183866Navigator from '../features/CopyOfSignUp136183866/navigator';
import SignIn538183865Navigator from '../features/SignIn538183865/navigator';
import Settings183848Navigator from '../features/Settings183848/navigator';
import BlankScreen18183845Navigator from '../features/BlankScreen18183845/navigator';
import BlankScreen17183844Navigator from '../features/BlankScreen17183844/navigator';
import Settings183829Navigator from '../features/Settings183829/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile183961: { screen: UserProfile183961Navigator },
CopyOfBlankScreen17183868: { screen: CopyOfBlankScreen17183868Navigator },
BlankScreen37183867: { screen: BlankScreen37183867Navigator },
CopyOfSignUp136183866: { screen: CopyOfSignUp136183866Navigator },
SignIn538183865: { screen: SignIn538183865Navigator },
Settings183848: { screen: Settings183848Navigator },
BlankScreen18183845: { screen: BlankScreen18183845Navigator },
BlankScreen17183844: { screen: BlankScreen17183844Navigator },
Settings183829: { screen: Settings183829Navigator },

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
