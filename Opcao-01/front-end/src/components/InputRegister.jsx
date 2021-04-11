import React from 'react';

function InputRegister({ name, value, setValue, checked, label, type = 'text' }) {
  return (
    <label htmlFor={ name } className={ `${name}-label` }>
      {`${label}`}
      <input
        type={ type }
        name={ name }
        className={ `signup-${name}` }
        data-testid={ `signup-${name}` }
        value={ type !== 'checkbox' ? value : '' }
        checked={ type === 'checkbox' ? checked : false }
        onChange={ (e) => (type !== 'checkbox'
          ? setValue(e.target.value) : setValue(e.target.checked)) }
      />
    </label>
  );
}

export default InputRegister;
