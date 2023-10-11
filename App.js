import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackPokemon from './screens/pokemon/StackPokemon';
import StackFavorites from './screens/favorite/StackFavorites';
import StackGames from './screens/games/StackGames'
import StackComparator from './screens/comparator/StackComparator';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="pokemon"
          shifting={true}>
<Tab.Screen
  name="comparador"
  component={StackComparator}
  options={{
    tabBarLabel: 'Comparador',
    tabBarIcon: () => (
      <MaterialCommunityIcons name="compare" size={26} />
    ),
  }}
/>
          <Tab.Screen
            name="favorites"
            component={StackFavorites}
            options={{
              tabBarLabel: 'Favoritos',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="heart-outline" size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="pokemon"
            component={StackPokemon}
            options={{
              tabBarLabel: 'Pokémon',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="pokeball" size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="games"
            component={StackGames}
            options={{
              tabBarLabel: 'Games',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="gamepad-variant-outline" size={26} />
                ),
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

