import { createContext,useState } from "react";
import { frontendSkills, backendSkills } from '../../data';


const LanguagesContext = createContext()

const LanguagesProvider = ({children}) => {
    const [isFrontendOpen, setIsFrontendOpen] = useState(false);
    const [isBackendOpen, setIsBackendOpen] = useState(false);

    return(
        <LanguagesContext.Provider value={{isFrontendOpen,setIsFrontendOpen,isBackendOpen,setIsBackendOpen,frontendSkills,backendSkills}}>
            {children}
        </LanguagesContext.Provider>
    )
}
export default LanguagesProvider
export {LanguagesContext}