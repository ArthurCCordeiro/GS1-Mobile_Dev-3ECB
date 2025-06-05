import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HistoricoMonitoramentoScreen() {
  const navigation = useNavigation();

  const meses = [
    { nome: 'Maio de 2025', rota: 'HistoricoMaio' },
    { nome: 'Abril de 2025', rota: 'HistoricoAbril' },
    { nome: 'Março de 2025', rota: 'HistoricoMarco' },
    { nome: 'Fevereiro de 2025', rota: 'HistoricoFevereiro' },
    { nome: 'Janeiro de 2025', rota: 'HistoricoJaneiro' },
    { nome: 'Dezembro de 2024', rota: 'HistoricoDezembro' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Histórico de Monitoramento</Text>

        {meses.map((mes) => (
          <TouchableOpacity
            key={mes.rota}
            style={styles.button}
            onPress={() => navigation.navigate(mes.rota)}
          >
            <Text style={styles.buttonText}>{mes.nome}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE3867',
  },
  scrollContainer: {
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
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
