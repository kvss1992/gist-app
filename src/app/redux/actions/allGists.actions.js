import {lookupAllGistNetworkCall} from '../../api';
import urls from '../../utils';

const lookupAllGistsRequest = () => {
  return {
    type: 'LOOKUP_ALL_GISTS_REQUEST'
  }
}

const lookupAllGistsRequestSuccess = (response, userName) => {
  return {
    type: 'LOOKUP_ALL_GISTS_REQUEST_SUCCESS',
    payload: response,
    isLoading: false,
    userName
  }
}

const lookupAllGistsRequestFailure = error => {
  return {
    type: 'LOOKUP_ALL_GISTS_REQUEST_ERROR',
    errorMsg: error,
    isLoading: false
  }
}

const lookupAllGists = userName => {
  return function (dispatch) {
    //  Dispatch action to make the loading as true for the spinner to show.
    dispatch(lookupAllGistsRequest);
    //  make the fetch request.
    return lookupAllGistNetworkCall(
      //  make the complete url using the username.
      urls.getAllGistUrl(userName))
      .then (res => {
        //  Based on the response length, dispatch the success or the failure actions.
        dispatch(res.length ?
          //  dispatch success action to store the response in the store.
          lookupAllGistsRequestSuccess(res, userName) :
          //  dispatch failure action to signal UI that network request failed.
          lookupAllGistsRequestFailure(`No Gists found for ${userName}`)
        );
      })
      // If everything fails, dispatch the failure action.
      .catch(error => dispatch(lookupAllGistsRequestFailure(`Some problem while making calls`)))
  }
}

export {lookupAllGists};