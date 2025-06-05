import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AcoesMitigacaoScreen() {
  const navigation = useNavigation();

  const acoes = [
    {
      titulo: 'Plantio de Vegetação',
      descricao: 'Reforça o solo e reduz o risco de deslizamentos.',
    },
    {
      titulo: 'Drenagem de Águas Pluviais',
      descricao: 'Evita acúmulo de água e infiltrações no solo.',
    },
    {
      titulo: 'Construção de Muretas de Contenção',
      descricao: 'Ajuda a estabilizar encostas íngremes.',
    },
    {
      titulo: 'Monitoramento Contínuo',
      descricao: 'Uso de sensores e inspeções periódicas.',
    },
    {
      titulo: 'Educação Comunitária',
      descricao: 'Conscientização e preparo da população local.',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Ações de Mitigação</Text>

        {acoes.map((acao, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{acao.titulo}</Text>
            <Text style={styles.cardText}>{acao.descricao}</Text>
          </View>
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
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    width: '100%',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
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
