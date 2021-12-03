import React from 'react';
import './Button.scss';

interface ButtonProps {
  primary: boolean,
  size: string,
  label: string,
  onClick?: () => void;
}

export const Button:React.FC<ButtonProps> = ({primary, size, label, onClick}) => {
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