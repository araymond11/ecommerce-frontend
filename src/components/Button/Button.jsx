import React from 'react';
import './Button.scss';

export const Button = (props) => {
  const mode = props.primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={['button', `button--${props.size}`, mode].join(' ')}
      onClick={props.onClicks}
    >
      {props.label}
    </button>
  );
};