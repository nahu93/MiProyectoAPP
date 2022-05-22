/* import { URL_AUTH_SIGNUP } from "../../constants/database";

export const SIGNUP = 'SIGNUP'

export const signup = (email,password) => {

    return async dispatch =>  {
        const response = await fetch (URL_AUTH_SIGNUP,{
            method:'POST',
            headers:{
                'Content-Type': 'application/jason'
            },
            body: JSON.stringify ({
                email,
                password,
                returnSecureToken: true
            })
        })

        if (!response.ok) {
            const errorResponse = await response.json ()
            const errorID = errorResponse.error.message
            let message = 'no se ha pedido registrar'
            if (errorID === 'EMAIL_EXISTS') message = 'Este email ya esta registrado'
            throw new Error (message)
        }

        const data = await response.json ()
        dispatch ({
            type: SIGNUP,
            token: data.idToken,
            user: data.email
        })
    }


}*/