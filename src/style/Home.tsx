import styled from 'styled-components';

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;

  &.true {
    background: #242424;
    height: 90vh;
  }
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;
  padding-right: 2rem;

  p {
    color: #cecece;
  }

  &:first-child {
    padding-bottom: 1rem;
  }
`;

const ContainerFile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  margin-top: 2rem;

  &.true p {
    color: #cecece;
  }
`;

const ContainerLines = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContainerFileTitle = styled.h2`
  margin-bottom: 1rem;

  &.true {
    color: #4ea3f3;
  }
`;

const ContainerFileSubTitle = styled.h1`
  margin-top: 5rem;
  color: #003c71;

  &.true {
    color: #4ea3f3;
  }
`;

const ContainerSubInfo = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #f6f6f6;

  &.true {
    background: #242424;

    p {
      color: #cecece;
    }
  }

  h3 {
    padding-top: 4rem;
    padding-left: 1rem;
    font-size: 1.5rem;
    color: #00b5e2;
  }

  input[type='file'] {
    display: none;
  }

  label {
    display: block;
    width: 355px;
    background-color: #00b5e2;
    color: #fff;
    padding: 10px 80px;
    margin-top: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-style: dashed;

    &:hover {
      background-color: #0056b3;
    }

    &:active {
      background-color: #003a75;
    }
  }

  p:last-child {
    padding-top: 1rem;
    padding-left: 1rem;
    color: #333f48;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background: #00b5e2;
  padding: 1rem 2rem;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const MobileStyles = styled.div`
  @media (max-width: 425px) {
    ${ContainerFile} {
      margin-left: 1rem;
    }

    ${ContainerSubInfo} {
      margin-left: 1rem;
      margin-right: 0rem;
    }
  }
`;

export {
  ContainerMain,
  ContainerInfo,
  ContainerLines,
  ContainerFile,
  ContainerFileTitle,
  ContainerFileSubTitle,
  ContainerSubInfo,
  ContainerButton,
  Button,
  MobileStyles,
};
