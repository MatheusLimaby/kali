import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import Routes from './src/Routes/Routes';

export default function App() {

  return (


    <PaperProvider>
      <NavigationContainer>
        <Routes />

      </NavigationContainer>


    </PaperProvider>
  );
}


