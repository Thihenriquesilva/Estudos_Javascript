import React from 'react';
import '../../assets/style/global.css';
import './style.css';

interface ButtonProps {
  value: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({value}) => {
  return (
      <input className="button" type="submit" value={value}/>
  );
}

export default Button;