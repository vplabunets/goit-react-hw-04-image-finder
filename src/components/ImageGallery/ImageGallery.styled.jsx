import React from 'react';
import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  grid: 10px;
  grid-template-columns: repeat(3, calc((100vw - 3 * 10px) / 3));
`;
