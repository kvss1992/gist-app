const initialState = {
  forks:[],
  isLoading: false,
  error: false
}

const singleGistReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOOKUP_SINGLE_GISTS_REQUEST': 
      return {
        ...state,
        isLoading: true,
      };
    case 'LOOKUP_SINGLE_GISTS_REQUEST_SUCCESS':
      return {
        ...state,
        forks: [...action.payload.forks],
        isLoading: false,
        error: false
      };
    case 'LOOKUP_SINGLE_GISTS_REQUEST_ERROR':
      return {
        ...state,
        forks: [],
        isLoading: false,
        error: action.errorMsg
      };
    default: 
      return state
  }
}

export default singleGistReducer;