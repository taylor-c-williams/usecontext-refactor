import { useContext, createContext, useState } from 'react'

// Create Context, Create Provider
const UserContext = createContext()
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

// Create Custom Hook
const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be called within a UserContext Provider!!!')
  }
  return context
}

export { UserProvider, useUser }
