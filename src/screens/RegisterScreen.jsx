import React, { useState } from 'react'
import {TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [nome, setNome] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confpassword, setConfpassword] = useState({ value: '', error: '' })


  const _onCadPressed = () => {
    console.log('CadastroIniciado')
    // navigation.navigate("Dashboard");
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome"
        returnKeyType="next"
        value={nome.value}
        onChangeText={(text) => setNome({ value: text, error: '' })}
        error={!!nome.error}
        errorText={nome.error}
        autoCapitalize="none"
        autoCompleteType="nome"
        textContentType="nomeAddress"
        keyboardType="nome-address"
        style={styles.input}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        label="Confsenha"
        returnKeyType="done"
        value={confpassword.value}
        onChangeText={(text) => setConfpassword({ value: text, error: '' })}
        error={!!confpassword.error}
        errorText={confpassword.error}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={_onCadPressed} style={styles.but}>
        Cadastrar
      </Button>

      <View style={styles.row}></View>
      <Text style={styles.label}>Possui uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 26,
    flex: 1,
    justifyContent: 'center',
  },
  esqueceuSenha: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  input: {
    width: '100%',
    marginTop: '10px',
  },
  label: {
    color: 'black',
  },
  link: {
    fontWeight: 'bold',
    color: 'black',
  },
  but: {
    marginTop:'10px'
  }
})
