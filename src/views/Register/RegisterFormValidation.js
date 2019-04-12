export default(values)=>{
    const errors={}
    if(!values.name){
        errors.name="Name required"
    }
    if(!values.username){
        errors.username="Username required"
    }
    if(!values.email){
        errors.email='Email required'
    }
    if(!values.password){
        errors.password='Password required'
    }
    return errors



}