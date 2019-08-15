import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const Routes = createStackNavigator(
  {
    Main
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F'
      },
      headerTintColor: '#FFF'
    }
  }
);

export default createAppContainer(Routes);
