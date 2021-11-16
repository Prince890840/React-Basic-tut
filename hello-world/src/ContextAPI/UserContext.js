import React from 'react';

//we can set default value of the context as a parameter
const UserContext = React.createContext('Codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider,UserConsumer }
export default UserContext