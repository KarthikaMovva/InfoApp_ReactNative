import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import './global.css';
import Home from "components/Home";
import Details from "components/Details";
import List from "components/List";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="List" component={List}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


