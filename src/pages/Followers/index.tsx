import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Container,
  Profile,
  ProfileImage,
  ProfileName,
  ProfileFollowers,
  ProfileFollowing,
  TabNavigation,
  FollowersList,
  FollowerCard,
  FollowerImage,
  FollowerName,
  ProfileButton,
} from './styles';

const Followers: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Profile>
          <ProfileImage />
          <ProfileName />
          <ProfileFollowers />
          <ProfileFollowing />
        </Profile>
        <Followers>
          <TabNavigation />
          <FollowersList>
            <FollowerCard>
              <FollowerImage />
              <FollowerName />
              <ProfileButton />
            </FollowerCard>
          </FollowersList>
        </Followers>
      </Container>
      <Footer />
    </>
  );
};

export default Followers;
