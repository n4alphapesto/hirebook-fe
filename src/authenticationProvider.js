import React from 'react';
import axios from 'axios';
import { readCookie } from './utils';

//export const AuthContext = React.createContext({});

const UserAuthenticator = ({ children }) => {
    const ssoToken = readCookie('ssoToken');
    if (ssoToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${ssoToken}`;
    }
    return children;
}
export default UserAuthenticator;