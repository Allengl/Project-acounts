import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    > output{
      background: white;
      font-size: 3.6rem;
      line-height: 7.2rem;
      text-align: right;
      padding: 0 1.6rem;
      box-shadow: inset 0 -0.5rem 0.5rem -0.5rem rgba(0,0,0,0.25),
                  inset 0  0.5rem 0.5rem -0.5rem rgba(0,0,0,0.25);
    }
    > .pad{
      > button{
        border: none; font-size: 1.8rem; float: left; width: 25%; height: 6.4rem;
        &.Ok{height: 12.8rem; float: right;}
        &.zero{width:50%;}
        &:nth-child(1){
          background: #f2f2f2;
        }
        &:nth-child(2),
        &:nth-child(5) {
          background: #e0e0e0;
        }
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9) {
          background: #d3d3d3;
        }
        &:nth-child(4),
        &:nth-child(7), 
        &:nth-child(10) {
          background: #c1c1c1;
        }
        &:nth-child(8),
        &:nth-child(11),
        &:nth-child(13) {
          background: #b8b8b8;
        }
        &:nth-child(12) {
          background: #9a9a9a;
        }
        &:nth-child(14) {
          background: #a9a9a9;
        }
      }
    }
  `;
export {Wrapper};