export const UPDATE_FORM = "UPDATE_FORM"

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/


const validateInput = ( { name, value } ) => {
    let error = ""
    let hasError = false
    const formatValue = value.trim()

    switch(name) {

        case "email" : 
            if( formatValue === "" ) {
                hasError= true
                error= "Por favor, rellena este campo" 
            } else if(!emailRegex.test( formatValue )) {
                hasError= true
                error= "Correo inválido"
            }else{
                hasError= false
                error="" 
            }
        break;


        case "password" : 
        if( formatValue === "" ) {
            hasError= true
            error= "Por favor, rellena este campo" 
        } else if(!passwordRegex.test( formatValue )) {
            hasError= true
            error= "Contraseña inválida. Escríbela de nuevo."
        }else{
            hasError= false
            error="" 
        }
        break;

        default:
            break;
    }

    return { hasError, error }
};


export const onInputChange = ({ name, value, dispatch, formState }) => {
    const { hasError, error } = validateInput({ name, value }) 
    let isFormValid = true;   

    for( const key in formState ){
        const item = formState[key]
        if( key !== name && hasError ){
            isFormValid = false
            break;
        } else if ( key !== name && item.hasError ){
            isFormValid = false
            break;
        }
    }

    dispatch({
        type: UPDATE_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid
        }
    })
}