import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../views/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default AppNavigator;