import styled from 'styled-components';

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1d252d;
  color: #ffffff;
  padding: 2rem 2rem 2rem 0;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;
`;

export { Headers, HeaderLogo, HeaderNav, Nav };
