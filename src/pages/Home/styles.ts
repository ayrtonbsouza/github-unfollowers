import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3em;
  color: #e4e4e4;
  max-width: 800px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Search = styled.div`
  margin: 48px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  form {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  button {
    max-width: 200px;
    margin-left: 24px;
    margin-top: 0;
    @media only screen and (max-width: 768px) {
      max-width: 100%;
      margin-left: 0;
      margin-top: 24px;
    }
  }
`;
