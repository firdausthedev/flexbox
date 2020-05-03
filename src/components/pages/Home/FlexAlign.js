import React from 'react';
import styled from 'styled-components';
const FlexAlign = () => {
  return (
    <FlexAlignContainer>
      <div className='items-align'>
        <div className='items-container'>
          <p>flex-start</p>
          <div className='items' style={{ alignItems: 'flex-start' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
        <div className='items-container'>
          <p>flex-end</p>
          <div className='items' style={{ alignItems: 'flex-end' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
        <div className='items-container'>
          <p>center</p>
          <div className='items' style={{ alignItems: 'center' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
        <div className='items-container'>
          <p>stretch (default)</p>
          <div className='items' style={{ alignItems: 'stretch' }}>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
          </div>
        </div>
      </div>
    </FlexAlignContainer>
  );
};
const FlexAlignContainer = styled.div`
  width: 100%;
  border: 2px solid ${(props) => props.theme.light.base.bg};
  min-height: 500px;
  border-radius: 5px;
  margin: 1rem 0;
  .items-align {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;

    .items-container {
      height: 20rem;
      margin: 1rem;
      display: flex;
      flex-direction: column;

      p {
        flex-basis: 10%;
        text-align: center;
        font-size: 2rem;
        color: ${(props) => props.theme.light.base.bg};
      }

      .items {
        border: 2px solid ${(props) => props.theme.light.base.bg};
        border-radius: 5px;
        flex-basis: 90%;
        display: flex;
        .item {
          min-height: 4rem;
          width: 4rem;
          background: ${(props) => props.theme.light.accent.base};
          border-radius: 5px;
          margin: 1rem;
        }
        .item:first-of-type {
          min-height: 7rem;
        }
      }
    }
  }

  @media (max-width: 710px) {
    .items-align .items-container p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 500px) {
    .items-align .items-container {
      height: 16rem;
    }
    .items-align .items-container p {
      font-size: 1.2rem;
    }
    .items-align .items-container p {
      margin-bottom: 5px;
    }
    .items-align .items-container .items {
      width: 100%;
    }
    .items-align .items-container .items .item {
      min-height: 2rem;
      width: 2rem;
    }
  }
  @media (max-width: 320px) {
    .items-align .items-container .items .item {
      min-height: 1.3rem;
      width: 1.3rem;
      margin: 0.5rem;
    }
  }
`;
export default FlexAlign;
