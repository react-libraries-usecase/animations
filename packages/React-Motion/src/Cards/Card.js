import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #fff;
  max-width: 500px;
  margin: 2rem;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transform: ${props => `scale(${props.scale})`};
`;


const FooterWrapper = styled.div`
  border-top: 2px solid #f7f7f7;
  padding: 1rem 0;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  background-image: ${props => `url('${props.image}')`};
  min-height: 150px;
  color: white;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background-size: 100%;
  background-position: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
`;

const MainWrapper = styled.div`
  padding: 1rem;
`;

const Button = styled.button`
  background: #ccc;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 10px 20px;
  margin: 0 0.45rem;
  &:active {
    background: #eee;
  }
`;

const Header = ({ title, image }) => {
  return (
    <HeaderWrapper image={image}>
      <h1>{title}</h1>
    </HeaderWrapper>
  );
};

const Main = ({ content }) => {
  return (
    <MainWrapper>
      <p>{content}</p>
    </MainWrapper>
  );
};

const Footer = () => {
  return (
    <FooterWrapper>
      <Button>View</Button>
      <Button>Save for later</Button>
    </FooterWrapper>
  );
};

class Card extends React.Component {
  render() {
    const { title, content, image, scale } = this.props;
    return (
      <CardWrapper scale={scale}>
        <Header title={title} image={image} />
        <Main content={content} />
        <Footer />
      </CardWrapper>
    );
  }
}

Card.defaultProps = {
  title: 'My card title',
  image: 'https://picsum.photos/id/487/536/354',
  content:
    'Bacon ipsum dolor amet pork chop pork shoulder.'
};

export default Card;
