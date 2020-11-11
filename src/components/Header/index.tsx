import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Title } from './styles';
import Github from '../../assets/github.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={Github} alt="Github Logo" />
        <Title>Unfollowers</Title>
      </Link>
    </Container>
  );
};

export default Header;
