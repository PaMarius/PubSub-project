import { useState } from "react";
import { subscribe, publish, unsubscribe } from "./stateManagement";
import { increment, decrement } from "./calculationStore";

export function useGlobalValue() {
  const [value, setValue] = useState(0);

  // Subscriptions
  subscribe("increment", () => increment(value, setValue));
  subscribe("decrement", () => decrement(value, setValue));

  return { value, publish };
}
