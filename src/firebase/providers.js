import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { fireBaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const sigIngWithGoogle = async() => {
    try{
        const result = await signInWithPopup(fireBaseAuth,googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL,uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        console.log(user);
    }catch(err){
        const errCode = err.code;
        const errMessage = err.message;

        return{
            ok: false,
            errCode,
            errMessage
        }
    }
}