const initialState = {
  userName: '',
  isLoading: false,
  error: false,
  gists: []
}

const allGistsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOOKUP_ALL_GISTS_REQUEST': 
      return {
        ...state,
        isLoading: true,
      };
    case 'LOOKUP_ALL_GISTS_REQUEST_SUCCESS':
      return {
        ...state,
        gists: [...action.payload],
        isLoading: false,
        userName: action.userName,
        error: false
      };
    case 'LOOKUP_ALL_GISTS_REQUEST_ERROR':
      return {
        ...state,
        gists: [],
        isLoading: false,
        userName: action.userName,
        error: action.errorMsg
      };
    default: 
      return state
  }
}

export default allGistsReducer;