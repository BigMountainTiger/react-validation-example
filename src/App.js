import React, { useRef, useEffect, useState } from 'react';

const App = () => {
  const initMountRef = useRef(true);

  useEffect(() => {
    if (initMountRef.current) { initMountRef.current = false; } else { }
  });

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    let tValue = value.trim();

    inputs[name] = tValue;
    setInputs({...inputs});

    switch (name) {
      case 'firstName': 
        errors.firstName = tValue.length <= 0
          ? 'First Name is required' : '';
        break;

      case 'lastName': 
        errors.lastName = tValue.length <= 0
        ? 'Last Name is required' : '';
        break;

      case 'email': 
        errors.email = tValue.length <= 0
        ? 'Email is required' : '';
        break;

      default:
        break;
    }

    setErrors({...errors});
  };

  const isValid = () => {

    let valid = true;
    Object.values(errors).forEach(
      (val) => { val.length > 0 && (valid = false); }
    );

    return valid;
  };

  const clear = () => {

  };

  return (
    <div className="log-in">
        <fieldset>
          <label>First Name</label>
          <input type="text" name="firstName" value={inputs.firstName}
            onFocus={handleChange}
            onChange={handleChange} />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
          <label>Last Name</label>
          <input type="text" name="lastName" value={inputs.lastName}
            onFocus={handleChange}
            onChange={handleChange} />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
          <label>Email</label>
          <input type="text" name="email" value={inputs.email}
            onFocus={handleChange}
            onChange={handleChange}/>
          {errors.email && <div className="error">{errors.email}</div>}
          <div style={{width: '300px'}}>
            <button disabled={!isValid()}>Submit</button>
            <button onClick={clear}>Clear</button>
          </div>
        </fieldset>
    </div>
  );
}

export { App };
