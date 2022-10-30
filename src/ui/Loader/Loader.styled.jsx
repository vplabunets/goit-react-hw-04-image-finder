import styled from 'styled-components';

export const LoaderWrap = styled.div`
  position: sticky;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
