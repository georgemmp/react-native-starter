import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createStackNavigator(
  {
    Main,
    Product
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
