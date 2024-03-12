import { StatusBar, } from 'expo-status-bar';
import { StyleSheet,SafeAreaView } from 'react-native';
import CategoryScreen from './screens/CategoryScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
<NavigationContainer>
<StatusBar style='dark'/>
<Stack.Navigator initialRouteName='Categories' screenOptions={{headerStyle:{backgroundColor:'#351401'},headerTintColor:'#ffffff',contentStyle:{backgroundColor:'#3f2f25'}}}>
  <Stack.Screen name='Categories' component={CategoryScreen} options={{title:'Categories'}}/>
  <Stack.Screen name='Overview' component={MealsOverviewScreen} options={{title:'Meals Overview'}}/>
  <Stack.Screen name='Details' component={MealDetailScreen} options={{title: 'Meal Details'}}/>
</Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
