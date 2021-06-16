//  This is a general file to make the network request 
//  in the whole project. 

/**
 * Look up all the Gists for a given a url.
 * @param {*} url - URL where request is made.
 * @returns All the public available gists of the entered username
 */
const lookupAllGistNetworkCall = url => {
  return fetch(url)
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })
}

export {lookupAllGistNetworkCall};