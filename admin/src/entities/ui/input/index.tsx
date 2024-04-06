import React from 'react';
import styled from '@emotion/styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    focusColor?: string;
}

const StyledInput = styled.input<InputProps>`
  padding: 5px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: ${props => props.focusColor || '#4CAF50'}; 
  }
`;

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, focusColor }) => {
    return <StyledInput type={type} placeholder={placeholder} focusColor={focusColor} />;
}

export default Input;