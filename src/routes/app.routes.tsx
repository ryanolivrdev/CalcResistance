import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Color } from "../screens/Color";

import { Home } from "../screens/Home";
import { Resistance } from "../screens/Resistance";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="resistance" component={Resistance} />
      <Screen name="color" component={Color} />
    </Navigator>
  );
}
