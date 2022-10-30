import React from 'react';
import { Btn, Equals, Opt } from './Button.styled';

const getBtnName = name => {
  const BtnName = {
    '=': 'Equals',
    x: 'Opt',
    '+': 'Opt',
    '-': 'Opt',
    '/': 'Opt',
    1: 'Btn',
    2: 'Btn',
    3: 'Btn',
    4: 'Btn',
    5: 'Btn',
    6: 'Btn',
    7: 'Btn',
    8: Btn,
    9: Btn,
  };
  console.log(BtnName[name]);
  return BtnName[name];
  // console.log(BtnName);
};

const Button = ({ value }) => {
  // let tag = getBtnName(value);
  // let markup = < {tag} >
  // return setTimeout({<getBtnName(value)/>}, 1000);
  return `<  ${getBtnName(value)}  />`;
};
export default Button;
