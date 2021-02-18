import React from 'react';
import ReactDOM from 'react-dom';
import ImageForm from 'Shared/ImageForm';
import Container from 'Shared/Layout/Container';
import Content from 'Shared/Layout/Content';

const Home = () => {
  return (
    <Container className="flex flex-center">
      <Content className="flex flex-center">
        <ImageForm />
      </Content>
    </Container>
  )
};

export default Home;
