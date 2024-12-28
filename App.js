import React, {useState} from "react";

import { ScrollView, View, Text, StatusBar, TextInput, Pressable } from "react-native";

import Grafico from "./src/components/Grafico";
import Janela from "./src/components/Janela";

export default function App() {

  const [ limite, setLimite ] = useState(1000);
  const [ gastos, setGastos ] = useState([]);
  const [ categoria, setCategoria ] = useState("");
  const [ valor, setValor ] = useState(0);

  function adicionarGasto() {
    setGastos([...gastos, { categoria, valor }]);
    setCategoria("");
    setValor(0);
  }

  function TotalGastos() {

    let total = 0;

    for (let gasto of gastos) {
      total += gasto.valor;
    }

    return total;
  }

  function mudarCategoria(texto) {

    setCategoria(texto);

  }

  function mudarValor(texto) {

    setValor(parseFloat(texto));

  }

  function definirLimite(texto) {

    setLimite(parseFloat(texto));
  }


  return <ScrollView>

    <StatusBar barStyle="dark-content" backgroundColor="#fff" />

    <Grafico porcentagem={(TotalGastos() / limite) * 100} />

    <Janela>

      <Text style={{fontSize: 18, marginBottom: 16, textAlign: "center"}}>Definir Limites</Text>

      <TextInput
      style={{ backgroundColor: "#fff", padding: 8 }}
      value={ limite.toString() }
      onChangeText={ definirLimite }
      placeholder="Limite (R$)" 
      keyboardType="number-pad"
      />


    </Janela>

    <Janela>

      <Text style={{fontSize: 18, marginBottom: 16, textAlign: "center"}}>Adicionar Gastos</Text>

      <TextInput 
        value={categoria}
        onChangeText={mudarCategoria}
        placeholder="Gasto"
        keyboardType="default"
        style={{ fontSize: 18, marginBottom: 16, textAlign: "center" }}
        />

      <TextInput
      value={valor.toString()}
      onChangeText={mudarValor}
      placeholder="Valor (R$)"
      keyboardType="number-pad"
      style={{ fontSize: 18, marginBottom: 16, textAlign: "center" }}
      />


      <Pressable onPress={adicionarGasto}>
        <View style={{backgroundColor: "#698269"}}>
          <Text style={{color: "#fff", paddingVertical: 16, textAlign: "center"}}>Adicionar</Text>
        </View>
      </Pressable>

    </Janela>

    <Janela>
      <Text style={{fontSize: 18, marginBottom: 16, textAlign: "center"}}>
        Histórico de Gastos
      </Text>

      {
        gastos.map((gasto, indice) => {
          return <Text key={indice} style={{color: "#698269"}}>
            {gasto.categoria} - R${gasto.valor}
            </Text>
        })

      }
    </Janela>

  </ScrollView>

}