
// a library to wrap and simplify api calls
import apisauce from 'apisauce'
//ck_367f16877f17257f9c77d30b26ed4e768f015043 key
//cs_eeb0551c6e6d2abb356d151a3ceb68cff1c16a3e secret

// our "constructor"
const create = (baseURL = 'http://localhost:8888') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
const login = (data) => api.post('/wp-json/jwt-auth/v1/token',data);
const forgotPassword = (data) => api.post('/wp-json/wp/v2/users/lostpassword',data);

  

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    login,
    forgotPassword
    
  }
}

// let's return back our create method as the default.
export default {
  create
}