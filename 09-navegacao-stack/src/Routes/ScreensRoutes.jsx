
import Feed from '../Screens/Feed';
import Home from '../Screens/Home';
import Posts from '../Screens/Posts';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Posts" component={Posts} />
    </Stack.Navigator>
  )
}

