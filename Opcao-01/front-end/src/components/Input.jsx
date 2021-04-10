import React from 'react';

function Input({ type, value, setValue, label }) {
  return (
    <label htmlFor={ type } className={ `${type}-label` }>
      {`${label}`}
      <input
        type={ type }
        name={ type }
        autoComplete={ `current-${type}` }
        className={ `${type}-input` }
        data-testid={ `${type}-input` }
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
    </label>
  );
}

export default Input;