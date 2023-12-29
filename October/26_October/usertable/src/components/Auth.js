// authService.js




export function login(username, password) {
    if (username === 'user' && password === 'password') {
      const token = generateToken();
      setToken(token);
      console.log(token)
      return true;
    }
    return false;
  }
  
  export function isAuthenticated() {
    const token = getToken();
    return !!token; 
  }
  

  export function logout() {   
    clearToken();
  }
  
  function generateToken() {
    // In a real application, generate a secure token (e.g., JWT) and return it.
    return 'example-token';
  }
  
  function setToken(token) {
    localStorage.setItem('token', token);
  }
  
  function getToken() {
    return localStorage.getItem('token');
  }
  
  function clearToken() {
    localStorage.removeItem('token');
  }
  