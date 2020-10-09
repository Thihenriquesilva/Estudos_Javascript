import React from 'react';
import '../../assets/style/global.css';
import './style.css';

interface ButtonProps {
  value: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <div className="button">
        <button>{props.value}</button>
    </div>
  );
}

export default Button;