import AlunoForm from '../Alunos/AlunoForm';
import AlunoLista from '../Alunos/AlunoLista';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function StackRoutes({navigation, route}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de Alunos" component={AlunoLista} />
      <Stack.Screen name="Cadastro de Alunos" component={AlunoForm} />
     
    </Stack.Navigator>
  )
}

