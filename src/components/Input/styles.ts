import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #101016;
  border-radius: 26px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid #101016;
  color: #666360;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #7159c1;
      border-color: #7159c1;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #7159c1;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
