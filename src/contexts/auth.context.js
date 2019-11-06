import { createContext } from 'react';

const AuthContext = createContext({
  user: {
    uuid: '',
    email: '',
    alias: '',
    firstName: '',
    lastName: '',
    methods: []
  }
});

export default AuthContext;
