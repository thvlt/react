import {createContext,useContext} from 'react'
const RCtx = createContext();

export const Context = ({ children, value }) => <RCtx.Provider value={value}>{children}</RCtx.Provider>

export const useValue = () => useContext(RCtx)