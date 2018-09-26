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

export const hideAllButtons = () => {
  return dispatch => {
    dispatch({
      type: Actions.START_BUTTON_HIDE
    });
    setTimeout(() => {
      dispatch({
        type: Actions.FINISH_BUTTON_HIDE
      });
    }, 1000);
  };
};

export const animateFallingKey = () => {
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

export const animateOpeningBox = () => {
  return dispatch => {
    dispatch({
      type: Actions.START_OPEN_BOX
    });
    setTimeout(() => {
      dispatch({
        type: Actions.FINISH_OPEN_BOX
      })
    }, 4000)
  };
};

export const pickKeyUp = () => {
  return {
    type: Actions.PICK_KEY_UP
  };
};

export const setKeyDown = () => {
  return {
    type: Actions.SET_KEY_DOWN
  };
};

export const updateCode = buttonId => {
  return {
    type: Actions.UPDATE_CODE,
    payload: buttonId
  };
};
