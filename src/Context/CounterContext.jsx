import { createContext ,useEffect,useState} from "react";

export let UserContext= createContext();
    //React Component 
    export function UserContextProvider(props){
        // const [Counter, setCounter] = useState(0);
        // const [userName, setuserName] = useState('');
        let[userLogin,setUserLogin]=useState(null);
        useEffect(()=>{
            if(localStorage.getItem('userToken')!==null)
            {
                setUserLogin(localStorage.getItem('userToken'))
            }
        },[])

        return  <UserContext.Provider value={{userLogin,setUserLogin}}>
            {props.children}

        </UserContext.Provider>

    }