import { useReducer } from 'react';

type Machine<S> = { [k: string]: { [k: string]: S } };
type MachineState<T> = keyof T;
type MachineEvent<T> = keyof UnionToIntersection<T[keyof T]>;

// 🤯 https://fettblog.eu/typescript-union-to-intersection/
type UnionToIntersection<T> = (T extends unknown ? (x: T) => unknown : never) extends (x: infer R) => unknown
  ? R
  : never;

export function useStateMachine<M>(initialState: MachineState<M>, machine: M & Machine<MachineState<M>>) {
  return useReducer((state: MachineState<M>, event: MachineEvent<M>): MachineState<M> => {
    const stateConfig = machine[state];
    if (stateConfig && Object.prototype.hasOwnProperty.call(stateConfig, event as PropertyKey)) {
      const nextState = (stateConfig as Record<PropertyKey, MachineState<M>>)[event as PropertyKey];
      return nextState ?? state;
    }
    return state;
  }, initialState);
}
