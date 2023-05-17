
import { useContext } from 'react';
import UserContext from '../context/UserProvider';


const useNewUser = () => {
    return useContext(UserContext)
}


export default useNewUser