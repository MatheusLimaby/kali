import 'react-native-gesture-handler';
import React from 'react';
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import DrawerRoutes from './src/DrawerRoutes';

export default function App() {
  return (
   <PaperProvider>
      <NavigationContainer>
        <DrawerRoutes/>
      </NavigationContainer>
   </PaperProvider>
  );
}

