
export const checkAuth = ( email,password ) => {
    return async (dispatch) => {
        dispatch( checkingCredentials() );
    }
}