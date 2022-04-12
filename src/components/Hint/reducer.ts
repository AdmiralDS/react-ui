export type State = {
  recalculation: any;
  visible: boolean;
  hintWidth: any;
};

export type ActionsType =
  | { type: 'setVisible' }
  | { type: 'setInvisible' }
  | { type: 'triggerRecalculation' }
  | { type: 'setHintWidth'; payload: any };

export const initialState: State = {
  recalculation: null,
  visible: false,
  hintWidth: null,
};

export const reducer = (state: State, action: ActionsType) => {
  switch (action.type) {
    case 'setVisible':
      return { ...state, visible: true };
    case 'setInvisible':
      return { ...state, visible: false };
    case 'setHintWidth':
      return { ...state, hintWidth: action.payload };
    case 'triggerRecalculation':
      return { ...state, recalculation: {} };
    default:
      throw new Error();
  }
};
