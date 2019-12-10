import { createContext } from 'react';

const AuthContext = createContext({
  user: {
    uuid: '',
    email: '',
    alias: '',
    firstName: '',
    lastName: '',
    methods: [],
    fid: '',
    gid: ''
  }
});

export default AuthContext;
