import i18n from '../../Translation/index';

const initialState = { langue: 'fr' };
export default function toggleLangueReducer(state = initialState, action) {
  let nextState;

  switch (action.type) {
    case 'TOEN':
      // setLangue(action.value.langue);
      i18n.locale = action.value.langue;
      console.log('from reducer ', action.value.langue);
      nextState = {
        ...state,
        langue: action.value.langue
      };
      return nextState || state;
    case 'TOFR':
      console.log('from reducer ', action.value.langue);
      // setLangue(action.value.langue);
      i18n.locale = action.value.langue;
      nextState = {
        ...state,
        langue: action.value.langue
      };
      return nextState || state;
    default:
      return state;
  }
}