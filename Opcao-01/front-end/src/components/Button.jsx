import React from 'react';

function Button({ className, onClick, disabled, children }) {
  return (
    <button
      type="button"
      data-testid={ className }
      className={ className }
      onClick={ onClick }
      disabled={ disabled }
    >
      {children}
    </button>
  );
}

export default Button;