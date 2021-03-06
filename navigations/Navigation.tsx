
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Asteroid from '../screens/Asteroid';
import Home from '../screens/Home';

export default function Navigation() {
    const Stack=createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Asteroid" component={Asteroid} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
