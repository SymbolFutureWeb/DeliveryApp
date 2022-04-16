const initialState = {
    userToken: null,
    isSignedOut: true,
    user: null,
    code: {
      code: '',
      timeStampe: null,
      email: ''
    }
  };
  export default function toggleAuthReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
      case 'SIGN_IN':
        //
        nextState = {
          ...state,
          userToken: action.value.token,
          isSignedOut: action.value.isSignedOut,
          user: action.value.user,
        };
        return nextState || state;
        case 'UPDATE_USER':
        //
        console.log('updating user in redux');
        nextState = {
          ...state,
          user: action.value.user,
        };
        console.log(nextState)
        return nextState || state;

      case 'SIGN_UP':
        //
        nextState = {
          ...state,
          isSignedOut: action.value.isSignedOut,
        };
        return nextState || state;
      case 'GET_TOKEN':
      console.log('getting token');
        nextState = {
          ...state,
          userToken: action.value.storedToken,
          isLoading: false,
          isSignedOut: false,
          user: action.value.user,
        };
        console.log('token recupere from get token', action.value);
        return nextState || state;
      case 'SIGN_OUT':
        //
        nextState = {
          ...state,
          userToken: null,
          isLoading: false,
          isSignedOut: true,
          user: null,
        };
        return nextState || state;
      case 'SET_CODE':
          //
          nextState = {
            ...state,
            code: action.value.code
          };
          return nextState || state;
      default:
        return state;
    }
  }
  