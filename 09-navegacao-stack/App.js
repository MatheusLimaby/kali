import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import StackRoutes from './src/Routes/ScreensRoutes';

export default function App() {

  return (


    <PaperProvider>
      <NavigationContainer>
        <StackRoutes />

      </NavigationContainer>


    </PaperProvider>
  );
}


