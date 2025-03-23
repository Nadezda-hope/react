import { UserContext as UserContextProvider } from ".";
import { useState } from 'react'
import { mockUser } from '../../../material/mock-user'

export function UserContext({ children }) {
    const [user, setUser] = useState('');

    const authorize = () => {
        if (user) {
            setUser('');
        } else {
            setUser(mockUser);
        }
    };

    return (
        <UserContextProvider value={{ user, authorize }}>
            {children}
        </UserContextProvider>
    );
}