exports.login = {
  route: '/index',
  logoutRoute: '/logout',
  views: {
    login: '',          // input fields 'login' and 'password' | POST /'login.route' | local variable 'error' 
    loggedOut: ''       // message that user logged out 
  },
  handleResponse: true  // let lockit handle the response after login/logout success 
};