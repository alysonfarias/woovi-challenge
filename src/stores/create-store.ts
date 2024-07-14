import { useSyncExternalStore } from "react";

export const createStore = <StoreType>(initialState: StoreType) => {
  let currentState = initialState;
  const listerners = new Set<(state: StoreType) => void>();
  const subscribe = (listener: (state: StoreType) => void) => {
    listerners.add(listener);
    return () => listerners.delete(listener);
  };

  return {
    getState: () => currentState,
    setState: (newState: StoreType) => {
      currentState = newState;
      listerners.forEach((listener) => listener(currentState));
    },
    subscribe,
    useStore: <SelectorOutput>(
      selector: (state: StoreType) => SelectorOutput
    ): SelectorOutput =>
      useSyncExternalStore(subscribe, () => selector(currentState)),
  };
};
