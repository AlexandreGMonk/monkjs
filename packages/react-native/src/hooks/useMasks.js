import { useReducer } from 'react';
import actionsToString from '../functions/actionsToString';
import { CLASSIC_CAR_MASKS } from '../components/CarMask/ClassicCar';

/**
 * @type {{
 * active: number,
 * success: number[],
 * warning: number[],
 * error: number[],
 * }}
 */
const initialState = {
  availableParts: CLASSIC_CAR_MASKS,
  active: 0,
  error: [],
  success: [],
  warning: [],
};

const ACTIONS = {
  forward: 'forward',
  backward: 'backward',
  reset: 'reset',
  setActive: 'setActive',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.forward:
      return { ...state, active: (state.active + 1) % state.availableParts.length };
    case ACTIONS.backward:
      return { ...state, active: (state.active ? state.active : state.availableParts.length) - 1 };
    case ACTIONS.reset:
      return { ...payload };
    case ACTIONS.setActive:
      return { ...state, active: payload.active };
    default:
      throw new Error(`
        Invalid action type for masksReducer.</br>
        Type must be one of
        ${actionsToString(ACTIONS)}
      `);
  }
}

function useMasks() {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Set state to next mask
   */
  function forward() {
    dispatch({ type: ACTIONS.forward });
  }

  /**
   * Set state to previous mask
   */
  function backward() {
    dispatch({ type: ACTIONS.backward });
  }

  /**
   * @param active {number}
   */
  function setActive(active) {
    dispatch({ type: ACTIONS.setActive, payload: { active } });
  }

  /**
   * Set state to initial or new
   * @param newState {initialState}
   */
  function reset(newState = initialState) {
    dispatch({ type: ACTIONS.reset, payload: { newState } });
  }

  const api = {
    forward,
    backward,
    reset,
    setActive,
  };

  return [state, api];
}

export default useMasks;