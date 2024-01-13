import React ,{useState, useEffect} from 'react'



export const ThemeContext =React.createContext(null);

export const  ThemeChanger = ({children}) =>{

    const[toggle,setToggle]=useState(false);

    const toggleTheme = () => {
        setToggle(!toggle);
      };

    useEffect(() =>{
        const timer= setTimeout(() =>{
          setToggle(!toggle)
        },2000)
        return()=>clearTimeout(!toggle);
    },[]);


    return(
        <ThemeContext.Provider value={{toggle, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}
