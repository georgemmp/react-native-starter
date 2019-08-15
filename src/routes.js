import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const Routes = createStackNavigator({
    Main
});

export default createAppContainer(Routes);
