import * as Actions from "../actions/actionDefinitions";

const initialState = {
  buttons: [
    {
      id: 0,
      char: null,
      visibility: "HIDDEN"
    },
    {
      id: 1,
      char: null,
      visibility: "HIDDEN"
    },
    {
      id: 2,
      char: null,
      visibility: "HIDDEN"
    },
    {
      id: 3,
      char: null,
      visibility: "HIDDEN"
    }
  ],
  banner: "What's this? Some kind of...black box?",
  key: "HIDDEN",
  box: "CLOSED"
};

export default (state = initialState, action) => {
  // console.log("Last state of the landingPuzzle slice: ", state);
  // console.log("Current action: ", action);
  const buttonArray = state.buttons.slice(0);
  let banner = state.banner;
  switch (action.type) {
    case Actions.START_BUTTON_REVEAL:
      // action.payload contains the id of the button to reveal
      buttonArray.find(button => {
        if (button.id === action.payload)
          return (button.visibility = "REVEALING");
      });
      return {
        ...state,
        buttons: buttonArray
      };
    case Actions.FINISH_BUTTON_REVEAL:
      buttonArray.find(button => {
        if (button.id === action.payload)
          return (button.visibility = "REVEALED");
      });
      const buttonsFound = buttonArray.filter(
        button => button.visibility === "REVEALED"
      ).length;
      switch (buttonsFound) {
        case 1:
          banner = "You found something!";
          break;
        case 2:
          banner = "There are more of them...";
          break;
        case 4:
          banner = "There must be some way to get it open.";
          break;
        default:
          break;
      }
      return {
        ...state,
        buttons: buttonArray,
        banner
      };
    case Actions.START_BUTTON_HIDE:
      buttonArray.forEach(button => button.visibility = "HIDING");
      return {
        ...state,
        buttons: buttonArray
      }
    case Actions.FINISH_BUTTON_HIDE:
      buttonArray.forEach(button => button.visibility = "SOLVED");
      return {
        ...state,
        buttons: buttonArray
      }
    case Actions.UPDATE_CODE:
      const buttonToEdit = buttonArray.find(
        button => button.id === action.payload
      );
      if (buttonToEdit.char === null || buttonToEdit.char === "Z")
        buttonToEdit.char = "A";
      else {
        buttonToEdit.char = String.fromCharCode(
          buttonToEdit.char.charCodeAt(0) + 1
        );
      }
      return {
        ...state,
        buttons: buttonArray
      };
    case Actions.PICK_KEY_UP:
      return {
        ...state,
        key: "HIDDEN"
      };
    case Actions.SET_KEY_DOWN:
      return {
        ...state,
        key: "REVEALED"
      };
    case Actions.START_KEY_DROP:
      return {
        ...state,
        key: "FALLING"
      };
    case Actions.FINISH_KEY_DROP:
      return {
        ...state,
        key: "REVEALED"
      };
    case Actions.START_OPEN_BOX:
      return {
        ...state,
        banner: "Nice to meet you...",
        box: "OPENING",
        key: "HIDDEN"
      };
      case Actions.FINISH_OPEN_BOX:
      return {
        ...state,
        banner: "I'm Leon.",
        box: "OPEN"
      };
    default:
      return {
        ...state,
        buttons: buttonArray
      };
  }
};
