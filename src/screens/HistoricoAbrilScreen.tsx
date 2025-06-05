import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HistoricoAbrilScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Riscos de Deslizamento</Text>

      <View style={styles.card}>
        <Text style={styles.label}>📍 Região Norte:</Text>
        <Text style={styles.value}>Risco alto - 43%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>📍 Região Sul:</Text>
        <Text style={styles.value}>Risco alto - 38%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>📍 Região Leste:</Text>
        <Text style={styles.value}>Risco alto - 41%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>📍 Região Oeste:</Text>
        <Text style={styles.value}>Risco alto - 45%</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FE3867',
    alignItems: 'center',
    flexGrow: 1,
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
