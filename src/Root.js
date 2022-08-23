import {useState, useMemo,createContext,useContext} from 'react'
import { createTheme } from '@mui/material/styles';
import App from './App'

const RCtx = createContext();
export const useValue = () => useContext(RCtx)

export default function Root() {
  const [mode,setMode] = useState('light')
  const changeTheme = useMemo(
    () => ({
      ct: () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }),
    []
  );
  const theme = useMemo(
    ()=>createTheme({palette: {mode: mode,},}), 
    [mode]);
    
  return (
    <RCtx.Provider value={{theme,changeTheme}}>
       <App />
    </RCtx.Provider>
  );
}
