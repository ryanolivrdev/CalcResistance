import { useNavigation } from "@react-navigation/native";
import {
  HStack,
  IconButton,
  StyledProps,
  useTheme,
  Heading,
} from "native-base";
import { CaretLeft } from "phosphor-react-native";

interface Props extends StyledProps {
  title: string;
}

export function Header({ title, ...rest }: Props) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function hadleGoBack() {
    navigation.goBack();
  }

  return (
    <HStack
      w="full"
      //   justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={hadleGoBack}
      />

      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-12}
      >
        {title}
      </Heading>
    </HStack>
  );
}
