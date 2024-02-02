import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    console.log("Children prop: ", children);
    const [user, setUser] = useState(null);

    const signIn = (userData) => {
        // Logic to set user data upon sign-in
        setUser(userData);
    };

    const signOut = () => {
        // Logic to clear user data upon sign-out
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
