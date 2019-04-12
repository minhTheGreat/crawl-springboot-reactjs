import React from 'react';

const TextField = ({
  input, meta: { touched, error }, isError, ...restOfInput
}) => (
  <div>
  <input
    {...input}
    
    {...restOfInput}
  />
  {touched && error  && <span>{error}</span>}
  
  </div>
)

export default TextField