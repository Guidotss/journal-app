import { registerUserWithEmailAndPassword, sigIngWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice'

export const checkAuth = ( email,password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await sigIngWithGoogle(); 

        if(!result.ok) return dispatch(logout(result.errMessage));

        dispatch(login( result ));
    }
}

export const startRegisterWithEmailAndPassword = ( nombre,email,password ) => {
    return async(dispatch) => {
        dispatch(checkingCredentials()); 
       const resp = await registerUserWithEmailAndPassword(nombre, email, password)
    }
}