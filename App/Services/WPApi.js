
// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import OAuth from 'oauth-1.0a'
import crypto from 'react-native-crypto'

const randomString = (length) => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

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
  
  const consumerKey = 'ck_367f16877f17257f9c77d30b26ed4e768f015043';
  const consumerSecret = 'cs_eeb0551c6e6d2abb356d151a3ceb68cff1c16a3e';

  const oauth = OAuth({
    consumer: { key: consumerKey, secret: consumerSecret},
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto.createHmac('sha1', key).update(base_string).digest('base64');
    }
  });
  
  _post = (path,data) =>{
    const request_data = {
      url: baseURL+path,
      method: 'POST'
    };
    const authorization = oauth.toHeader(oauth.authorize(request_data));
    api.setHeader('Authorization',authorization.Authorization);
    return api.post(path,data);
  }

  _get = (path) => {
    const request_data = {
      url: baseURL+path,
      method: 'GET'
    };
    const authorization = oauth.toHeader(oauth.authorize(request_data));
    api.setHeader('Authorization',authorization.Authorization);
    return api.post(path);
  }
  // const wcApi = new WooCommerceAPI({
  //   url: baseURL,
  //   consumerKey: 'ck_367f16877f17257f9c77d30b26ed4e768f015043',
  //   consumerSecret: 'cs_eeb0551c6e6d2abb356d151a3ceb68cff1c16a3e',
  //   wpAPI: true,
  //   version: 'wc/v2'
  // });

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
const register = (data) => _post('/wp-json/wc/v2/customers',data);
  

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
    forgotPassword,
    register
    // register
    
  }
}

// let's return back our create method as the default.
export default {
  create
}