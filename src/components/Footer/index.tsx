import React from 'react';
import { Container, SocialMedia, Title } from './styles';
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import Medium from '../../assets/medium.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>
        Made with <span>♥️</span> by Ayrton Souza.
      </Title>
      <SocialMedia>
        <a
          href="https://github.com/ayrtonbsouza"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="github" />
        </a>
        <a
          href="https://medium.com/@ayrtonsouza"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Medium} alt="medium" />
        </a>
        <a
          href="https://www.linkedin.com/in/ayrtonsouza/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="linkedin" />
        </a>
      </SocialMedia>
    </Container>
  );
};

export default Header;
