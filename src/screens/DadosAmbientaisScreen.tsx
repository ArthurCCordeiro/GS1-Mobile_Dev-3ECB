import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DadosAmbientaisScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Ambientais</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Densidade da Vegetação:</Text>
        <Text style={styles.value}>Alta cobertura - 85%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Densidade Pluvial Semanal:</Text>
        <Text style={styles.value}>Moderada - 45 mm</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Material do Solo:</Text>
        <Text style={styles.value}>Rochoso / Argiloso</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Declividade do Terreno:</Text>
        <Text style={styles.value}>Baixa - 8°</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE3867',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    width: '100%',
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  value: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
