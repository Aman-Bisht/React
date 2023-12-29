// features/auth/authMiddleware.js
import { setUser } from './authSlice';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === 'auth/loginSuccess') {
    // Assuming loginSuccess action provides user data
    store.dispatch(setUser(action.payload));
  }
  return next(action);
};

export default authMiddleware;
