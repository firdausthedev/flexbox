/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import FlexJustify from './FlexJustify';
import FlexAlign from './FlexAlign';

const Flex = ({ justifyHandler, justify }) => {
  return (
    <FlexStyle>
      <div className='title'>
        <h2>Flexbox</h2>
      </div>
      <div className='toggle'>
        <a onClick={justifyHandler} className={!justify ? 'InActiveLink' : 'activeLink'}>
          justify-content
        </a>
        <a onClick={justifyHandler} className={justify ? 'InActiveLink' : 'activeLink'}>
          align-items
        </a>
      </div>
      <div className='flex-container'>{justify ? <FlexJustify /> : <FlexAlign />}</div>
    </FlexStyle>
  );
};

const FlexStyle = styled.div`
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    h2 {
      text-align: center;
      font-size: 2rem;
      display: inline-block;
      border-bottom: solid 3px ${(props) => props.theme.light.accent.base};
    }
  }

  .toggle {
    display: flex;
    justify-content: center;
    align-items: center;

    a:first-of-type {
      text-decoration: none;
      background: ${(props) => props.theme.light.base.bg};
      color: ${(props) => props.theme.light.base.color};
      padding: 1rem 1rem;
      border-radius: 5px 0 0 5px;
    }
    a {
      text-decoration: none;
      background: ${(props) => props.theme.light.grey.darker};
      color: ${(props) => props.theme.light.base.bg};
      padding: 1rem 1rem;
      border-radius: 0 5px 5px 0;
    }
  }

  .InActiveLink {
    pointer-events: auto;
    cursor: pointer;
    background: ${(props) => props.theme.light.grey.darker} !important;
    color: ${(props) => props.theme.light.base.bg} !important;
  }

  .activeLink {
    pointer-events: none;
    cursor: default;
    color: ${(props) => props.theme.light.base.color} !important;
    background: ${(props) => props.theme.light.base.bg} !important;
  }
  @media (max-width: 320px) {
    .toggle {
      a:first-of-type {
        padding: 0.6rem;
        font-size: 0.8rem;
      }
      a {
        padding: 0.6rem;
        font-size: 0.8rem;
      }
    }
  }
`;

export default Flex;
