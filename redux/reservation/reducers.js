import { GET_ORDER, REVISE_ORDER, SAVE_ORDER } from "./types";

const initalState = { order: [{ id: 1, adults: 1, children: 0 }] };

const reservationReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return state;
    case REVISE_ORDER:
      return {
        ...state,
        order: action.payload
      };
    //   case SAVE_ORDER:
    //     return {
    //       ...state,
    //       toppings: state.toppings.filter(topping => topping !== action.payload)
    //     }
    default:
      return state;
  }
};

export default reservationReducer;
