import React from 'react';
import styled from 'styled-components';

const FlexJustify = () => {
  return (
    <FlexJustifyContainer>
      <div className='items-justify'>
        <div className='items-container'>
          <p>flex-start (default)</p>
          <div className='items' style={{ justifyContent: 'flex-start' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
        <div className='items-container'>
          <p>flex-end</p>
          <div className='items' style={{ justifyContent: 'flex-end' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
        <div className='items-container'>
          <p>center</p>
          <div className='items' style={{ justifyContent: 'center' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
        <div className='items-container'>
          <p>space-around</p>
          <div className='items' style={{ justifyContent: 'space-around' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
        <div className='items-container'>
          <p>space-between</p>
          <div className='items' style={{ justifyContent: 'space-between' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
        <div className='items-container'>
          <p>space-evenly</p>
          <div className='items' style={{ justifyContent: 'space-evenly' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
      </div>
    </FlexJustifyContainer>
  );
};

const FlexJustifyContainer = styled.div`
  width: 100%;
  border: 2px solid ${(props) => props.theme.light.base.bg};
  min-height: 500px;
  border-radius: 5px;
  margin: 1rem 0;

  .items-justify {
    display: flex;
    flex: 1;
    flex-direction: column;

    .items-container {
      height: 6rem;
      margin: 1rem;
      display: flex;
      align-items: center;

      p {
        flex-basis: 20%;
        text-align: center;
        margin-right: 10px;
        font-size: 2rem;
        color: ${(props) => props.theme.light.base.bg};
      }

      .items {
        border: 2px solid ${(props) => props.theme.light.base.bg};
        border-radius: 5px;
        height: 5rem;
        flex-basis: 80%;
        display: flex;
        align-items: center;
        .item {
          height: 3.5em;
          width: 3.5rem;
          background: ${(props) => props.theme.light.accent.base};
          border-radius: 5px;
          margin: 1rem;
        }
      }
    }
    .items-container:first-of-type {
      margin-top: 2rem;
    }
    .items-container:last-of-type {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 710px) {
    .items-justify .items-container p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 500px) {
    .items-justify .items-container {
      flex-direction: column;
    }
    .items-justify .items-container p {
      font-size: 1.2rem;
    }
    .items-justify .items-container p {
      margin-bottom: 5px;
    }
    .items-justify .items-container .items {
      width: 100%;
    }
    .items-justify .items-container .items .item {
      height: 2rem;
      width: 2rem;
    }
  }
  @media (max-width: 320px) {
    .items-justify .items-container .items .item {
      height: 1.3rem;
      width: 1.3rem;
      margin: 0.5rem;
    }
  }
`;

export default FlexJustify;
