import React from 'react';
import './Button.scss';

export const Button = ({primary, size, label, onClick}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
     * Is this the principal call to action on the page?
     */
  primary: PropTypes.bool,
  /**
     * How large should the button be?
     */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
     * Button contents
     */
  label: PropTypes.string.isRequired,
  /**
     * Optional click handler
     */
  onClick: PropTypes.func,
};