import React from 'react';
import { Container, SocialMedia, Title } from './styles';
import Github from '../../assets/footer-github.svg';
import Linkedin from '../../assets/linkedin.svg';
import Whatsapp from '../../assets/whatsapp.svg';
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
        <a
          href="https://web.whatsapp.com/send?phone=+5511941800859"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Whatsapp} alt="whatsapp" />
        </a>
      </SocialMedia>
    </Container>
  );
};

export default Header;
