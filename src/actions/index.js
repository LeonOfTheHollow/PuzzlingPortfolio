import * as Actions from "./actionDefinitions";

export const revealButton = buttonId => {
  return dispatch => {
    dispatch({
      type: Actions.START_BUTTON_REVEAL,
      payload: buttonId
    });
    setTimeout(() => {
      dispatch({
        type: Actions.FINISH_BUTTON_REVEAL,
        payload: buttonId
      });
    }, 1000);
  };
};

export const dropKey = () => {
  return dispatch => {
    dispatch({
      type: Actions.START_KEY_DROP
    });
    setTimeout(() => {
      dispatch({
        type: Actions.FINISH_KEY_DROP
      });
    }, 1500);
  };
};

export const updateCode = buttonId => {
  return {
    type: Actions.UPDATE_CODE,
    payload: buttonId
  };
};
