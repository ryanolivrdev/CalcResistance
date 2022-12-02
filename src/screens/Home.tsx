import { useState } from "react";
import { HStack, VStack, useTheme, Text, Heading } from "native-base";
import { Lightning } from "phosphor-react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";
import { personalGreeting } from "../helpers/personalGreeting";

export function Home() {
  const navigation = useNavigation();
  const { colors } = useTheme();

  function handleGoToPage(page: "resistance" | "color") {
    navigation.navigate(page);
  }

  //   function handleOpenDetails(orderId: string) {
  //     navigation.navigate("details", { orderId });
  //   }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        alignItems="center"
        justifyContent="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
        space={2}
      >
        <Heading color="gray.100">CalcResistance</Heading>

        <Lightning size={24} color={colors.green[300]} />
      </HStack>
      <VStack flex={1} px={6} justifyContent="center">
        <Heading color="gray.100" textAlign="center">
          {personalGreeting()}
        </Heading>
        <Text color="gray.300" fontSize="sm" textAlign="center" mb={5}>
          Selecione uma das opções abaixo
        </Text>

        <VStack space={5}>
          <Button
            title="Achar Resistência"
            onPress={() => handleGoToPage("resistance")}
          />
          <Button title="Achar Cores" onPress={() => handleGoToPage("color")} />
        </VStack>
      </VStack>
    </VStack>
  );
}
