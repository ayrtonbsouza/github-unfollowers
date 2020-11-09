import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #7159c1;
  height: 56px;
  border-radius: 28px;
  border: 0;
  padding: 0 16px;
  color: #f2f2f2;
  width: 100%;
  font-weight: 600;
  margin-top: 16px;
  transition: 0.2s background-color;
  &:hover {
    background: ${shade(0.2, '#7159C1')};
  }
`;
