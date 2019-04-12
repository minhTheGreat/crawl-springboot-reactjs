export default (values)=>{
 
    const errors ={}
    if(!values.username){
        errors.username ='username required'
    }
    if(!values.password){
        errors.password ='password required'
    }

    return errors


}