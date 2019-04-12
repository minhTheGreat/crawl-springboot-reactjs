import React from 'react';

const Button = (props)=>{
    const {...otherProps}=props;

    return <input type="submit" className="btn btn-priamry" {...otherProps}/>
}
export default Button