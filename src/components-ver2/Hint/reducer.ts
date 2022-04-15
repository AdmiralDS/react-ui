export type State = {
  recalculation: any;
  visible: boolean;
};

export type ActionsType = { type: 'setVisible' } | { type: 'setInvisible' } | { type: 'triggerRecalculation' };

export const initialState: State = {
  recalculation: null,
  visible: false,
};

export const reducer = (state: State, action: ActionsType) => {
  switch (action.type) {
    case 'setVisible':
      return { ...state, visible: true };
    case 'setInvisible':
      return { ...state, visible: false };
    case 'triggerRecalculation':
      return { ...state, recalculation: {} };
    default:
      throw new Error();
  }
};
