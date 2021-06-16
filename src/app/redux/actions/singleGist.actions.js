import {lookupAllGistNetworkCall} from '../../api';
import urls from '../../utils';

const lookupSingleGistRequest = () => {
  return {
    type: 'LOOKUP_SINGLE_GISTS_REQUEST'
  }
}

const lookupSingleGistRequestSuccess = response => {
  return {
    type: 'LOOKUP_SINGLE_GISTS_REQUEST_SUCCESS',
    payload: response,
    isLoading: false,
  }
}

const lookupSingleGistRequestFailure = error => {
  return {
    type: 'LOOKUP_SINGLE_GISTS_REQUEST_ERROR',
    errorMsg: error,
    isLoading: false
  }
}

const lookupSingleGist = gistId => {
  return function (dispatch) {
    //  Dispatch action to make the loading as true for the spinner to show.
    dispatch(lookupSingleGistRequest);
    //  make the fetch request.
    return lookupAllGistNetworkCall(
      //  make the complete url using the gistId.
      urls.getSingleGistUrl(gistId))
      .then (res => {
        dispatch(res.forks.length ? lookupSingleGistRequestSuccess(res) : lookupSingleGistRequestFailure ('No forks.'))
      })
      // If everything fails, dispatch the failure action.
      .catch(error => dispatch(lookupSingleGistRequestFailure(`Some problem while fetching forks`)))
  }
}

export {lookupSingleGist};