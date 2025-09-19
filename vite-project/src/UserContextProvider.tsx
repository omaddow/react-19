import { useState, useEffect, createContext} from "react";
export interface User {
    name: string;
    age: number;
    isMarried: boolean;
}

interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const contextInitalValues = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(contextInitalValues);

interface Props {
    children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        setUsers([
            { name: "Osman", age: 25, isMarried: false },
            { name: "Anjuu", age: 5, isMarried: false },
            { name: "Fowsa", age: 7, isMarried: false },
        ]);
    }, []);

    const addUser = (user: User) => null
    const updateUser = (id: string) => null
    const deleteUser = (id: string) => null
        
    return (
        <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
            {" "}
            {props.children}
        </UserContext.Provider>
    );
};