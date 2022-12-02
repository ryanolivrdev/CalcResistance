import { getHours } from "../utils/getHours";
import { dayParts, greetings } from "./constants";

export const personalGreeting = () => {
  const hour = getHours;

  let i = 0;
  const greet = (): string => {
    if (hour < dayParts[i]) {
      return greetings[i];
    }

    i++;
    return greet();
  };
  return greet();
};
