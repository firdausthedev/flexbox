/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from 'styled-components';
import FlexJustify from './FlexJustify';
import FlexAlign from './FlexAlign';

const Flex = ({ justifyHandler, justify }) => {
  const [value, setValue] = useState(100);
  const [isDragging, setIsDragging] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const event = (e) => {
    setIsDragging(!isDragging);
  };

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
      {justify && (
        <div className='slider'>
          <input
            type='range'
            min='45'
            max='100'
            value={value}
            onChange={onChange}
            onMouseDown={event}
            onMouseUp={event}
            onTouchStart={event}
            onTouchEnd={event}
          />
        </div>
      )}

      <div className='flex-container'>{justify ? <FlexJustify value={value} drag={isDragging} /> : <FlexAlign />}</div>
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

  .slider {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    input[type='range'] {
      outline: none;
      border: 0;
      border-radius: 500px;
      width: 500px;
      max-width: 100%;
      margin: auto;
      transition: box-shadow 0.2s ease-in-out;
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        & {
          height: 6px;
          -webkit-appearance: none;
          background-color: ${(props) => props.theme.light.grey.darker};
        }

        &::-webkit-slider-thumb {
          width: 20px;
          -webkit-appearance: none;
          height: 20px;
          border-radius: 50%;
          /* margin-left: 15px; */
          cursor: grab;
          box-shadow: inset 0 0 0 20px ${(props) => props.theme.light.accent.base};
          transition: box-shadow 0.2s ease-in-out;
          position: relative;
        }
        &:active::-webkit-slider-thumb {
        }
      }
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

  @media (max-width: 500px) {
    .toggle {
      a:first-of-type {
        padding: 0.7rem;
        font-size: 0.8rem;
      }
      a {
        padding: 0.7rem;
        font-size: 0.8rem;
      }
    }
  }
`;

export default Flex;
