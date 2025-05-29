import { Alert, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput, Text } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import AlunoService from '../Service/AlunoService';

export default function AlunoForm({ navigation, route }) {
  const AlunoAntigo = route.params || {}

  const [nome, setNome] = useState(AlunoAntigo.nome || '');
  const [cpf, setCpf] = useState(AlunoAntigo.cpf || '');
  const [email, setEmail] = useState(AlunoAntigo.email || '');
  const [telefone, setTelefone] = useState(AlunoAntigo.telefone || '');
  const [nascimento, setNascimento] = useState(AlunoAntigo.nascimento || '');

  function Salvar() {
    const aluno = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      nascimento: nascimento,
    };

    if (!nome || !cpf || !email || !telefone || !nascimento) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    if (AlunoAntigo.id) {
      aluno.id = AlunoAntigo.id
      AlunoService.atualizar(aluno);
      Alert.alert('Aluno atualizado com sucesso!');
    }
    else{
    AlunoService.salvar(aluno)
    alert('Aluno salvo com sucesso!');
  }
  }

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Informe os Dados:</Text>
      <Text variant="titleLarge" style={{ marginTop: 10 }} >Aluno ID: {AlunoAntigo.id || "NOVO" }</Text>
      <TextInput
        label="Nome"
        mode="outlined"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        keyboardType='default'
      />
      <TextInput
        label="CPF"
        mode="outlined"
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        keyboardType='numeric'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cpf'}
            options={{
              format: '999.999.999-99',
            }}
          />
        )}
      />
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <TextInput
        label="Telefone"
        mode="outlined"
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        keyboardType='phone-pad'
        placeholder='(XX)XXXXX-XXXX'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'custom'}
            options={{
              mask: '(99)99999-9999',
            }}
          />
        )

        }
      />
      <TextInput
        label="Data de Nascimento"
        mode="outlined"
        style={styles.input}
        value={nascimento}
        onChangeText={setNascimento}
        keyboardType='numeric'
        placeholder='DD/MM/YYYY'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
          />
        )}
      />
      <Button
        mode="contained"
        onPress={Salvar}
        style={{ width: '90%', marginTop: 20 }}
      >
        Salvar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: '90%',
    marginVertical: 10,
  },
});
