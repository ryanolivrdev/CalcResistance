import { VStack, Text, Spinner, HStack, Heading } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Alert, Keyboard } from "react-native";

export function Color() {
  const [process, setProcess] = useState(false);
  const [userInput, setUserInput] = useState("");

  const [result, setResult] = useState("");

  async function CalcResistance() {
    Keyboard.dismiss();

    if (!userInput) {
      return Alert.alert("Error", "Por favor, preencha todos os campos");
    }

    setProcess(true);
    await api
      .post("/getColor", {
        resistence: userInput,
      })
      .then(({ data }) => setResult(data.result))
      .catch((err) => {
        Alert.alert(
          "Error",
          "Ocorreu algum erro no servidor, tente novamente mais tarde"
        );
      });

    setProcess(false);
  }

  useEffect(() => {
    setResult("");
  }, [userInput]);

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Achar Cor" />

      <Text color="gray.300" fontSize="sm" textAlign="center">
        Escreva a resistencia do resistor
      </Text>

      <Input
        placeholder="Resistencia do resistor"
        mt={4}
        onChangeText={setUserInput}
        keyboardType="numeric"
        onEndEditing={CalcResistance}
        returnKeyType="send"
      />

      {!process ? (
        <Button title="Calcular" mt={5} onPress={CalcResistance} />
      ) : (
        <HStack space={2} mt={5} justifyContent="center">
          <Spinner color="primary.700" />
          <Heading color="primary.700" fontSize="md">
            Carregando
          </Heading>
        </HStack>
      )}

      {result && (
        <Text color="primary.700" fontSize="md" textAlign="center" mt={5}>
          Resultado: {result}
        </Text>
      )}
    </VStack>
  );
}
