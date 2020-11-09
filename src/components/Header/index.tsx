import React from 'react';
import { Container, Logo, Title } from './styles';
import Github from '../../assets/github.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={Github} alt="Github Logo" />
      <Title>Unfollowers</Title>
    </Container>
  );
};

export default Header;
