import React from 'react';
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/Homescreen";
import SettingsScreen from "./screens/Settings";
import ProfileScreen from './screens/ProfileScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import {Ionicons} from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <PaperProvider>
      
      <NavigationContainer>

        <Tab.Navigator>

          <Tab.Screen name="Home"
           component={HomeScreen}
           options={
            {
              title: 'Tela de Início',
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerStyle: {
                backgroundColor: 'white',
                
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
  
            }
           }
           />
          <Tab.Screen name="Profile" component={ProfileScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
                 
          
        
        </Tab.Navigator>

      </NavigationContainer>
    </PaperProvider>
  );
}

