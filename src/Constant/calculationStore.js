import { useState } from "react";
import { subscribe, publish, unsubscribe } from "./stateManagement";

export function useGlobalValue() {
  const [value, setValue] = useState(0);

  // Functionality
  const decrement = () => {
    setValue(value - 1);
  };

  const increment = () => {
    setValue(value + 1);
  };

  // Subscriptions
  subscribe("increment", increment);
  subscribe("decrement", decrement);

  return { value, publish };
}
