import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Navbar = (props) => {
  return (
    <NavContainer id='navbar'>
      <Nav>
        <div className='title-wrapper'>
          <h2>
            <FontAwesomeIcon icon={faCss3Alt} /> &nbsp;<span>Flexbox</span>
          </h2>
        </div>
        <ul>
          <li>
            <a
              href='https://github.com/firdausthedev/covid19-malaysia-tracker'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faGithubAlt} /> Check out codes
            </a>
          </li>
        </ul>
      </Nav>
    </NavContainer>
  );
};

const Nav = styled.nav`
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;

  ul {
    list-style: none;
    display: flex;
  }

  a {
    color: ${(props) => props.theme.light.base.color};
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 7px;

    &:hover {
      transition: 1s;
      color: ${(props) => props.theme.light.base.bg};
      background: ${(props) => props.theme.light.accent.base};
      border-radius: 7px;
    }
  }

  .title-wrapper {
    h2 {
      font-size: 1.6rem;
      span {
        color: ${(props) => props.theme.light.accent.base};
      }
    }

    svg {
      transform: scale(1.4);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    .title-wrapper {
      margin-bottom: 1rem;
      h2 {
        font-size: 1rem;
      }
    }
  }
`;

const NavContainer = styled.div`
  ${(props) =>
    css`
      background-color: ${props.theme.light.base.bg};
    `}
  color: ${(props) => props.theme.light.base.color};
`;

export default Navbar;
