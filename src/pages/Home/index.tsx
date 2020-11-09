import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiGithub } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, Title, Search } from './styles';

interface GithubFormData {
  user: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: GithubFormData) => {
    return data;
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Title>See who is not following you back on Github.</Title>
        <Search>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              icon={FiGithub}
              name="user"
              type="text"
              placeholder="Type your Github username here"
            />
            <Button type="submit">Search</Button>
          </Form>
        </Search>
      </Container>
    </>
  );
};

export default Home;
