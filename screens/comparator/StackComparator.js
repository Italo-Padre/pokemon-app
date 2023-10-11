import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Comparator from './Comparator';

const StackComparator = () => {

    const Stack = createNativeStackNavigator();
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="comparator-pokemon" component={Comparator} options={{ title: 'Comparador de Pokemons' }} />
      </Stack.Navigator>
    </>
  )
}

export default StackComparator