import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import DadosAmbientaisScreen from './src/screens/DadosAmbientaisScreen';
import VisualizacaoRiscosScreen from './src/screens/VisualizacaoRiscosScreen';
import HistoricoMonitoramentoScreen from './src/screens/HistoricoMonitoramentoScreen';
import AcoesMitigacaoScreen from './src/screens/AcoesMitigacaoScreen';

import HistoricoMaioScreen from './src/screens/HistoricoMaioScreen';
import HistoricoAbrilScreen from './src/screens/HistoricoAbrilScreen';
import HistoricoMarcoScreen from './src/screens/HistoricoMarcoScreen';
import HistoricoFevereiroScreen from './src/screens/HistoricoFevereiroScreen';
import HistoricoJaneiroScreen from './src/screens/HistoricoJaneiroScreen';
import HistoricoDezembroScreen from './src/screens/HistoricoDezembroScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="DadosAmbientais" component={DadosAmbientaisScreen} />
        <Stack.Screen name="VisualizacaoRiscos" component={VisualizacaoRiscosScreen} />
        <Stack.Screen name="HistoricoMonitoramento" component={HistoricoMonitoramentoScreen} />
        <Stack.Screen name="AcoesMitigacao" component={AcoesMitigacaoScreen} />

        <Stack.Screen name="HistoricoMaio" component={HistoricoMaioScreen} />
        <Stack.Screen name="HistoricoAbril" component={HistoricoAbrilScreen} />
        <Stack.Screen name="HistoricoMarco" component={HistoricoMarcoScreen} />
        <Stack.Screen name="HistoricoFevereiro" component={HistoricoFevereiroScreen} />
        <Stack.Screen name="HistoricoJaneiro" component={HistoricoJaneiroScreen} />
        <Stack.Screen name="HistoricoDezembro" component={HistoricoDezembroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
