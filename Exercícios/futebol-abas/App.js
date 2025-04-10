import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Escudo from './Screens/EscudoScreen';
import Jogadores from './Screens/JogadoresScreen';
import Titulos from './Screens/TitulosScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#fff',          
            tabBarInactiveTintColor: '#ffdada',     
          }}
        >
          <Tab.Screen
            name="Home"
            component={Escudo}
            options={{
              title: 'Escudo',
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerStyle: {
                backgroundColor: '#e63946',
              },
              tabBarStyle: {
                backgroundColor: '#e63946',
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="shield" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Jogadores"
            component={Jogadores}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#e63946',
              },
              tabBarStyle: {
                backgroundColor: '#e63946',
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Títulos"
            component={Titulos}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#e63946',
              },
              tabBarStyle: {
                backgroundColor: '#e63946',
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
