import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1;
  --margin-bottom: 8px;
  display: inline-block;
  padding: 15px;
  background: red;
  line-height: 1;
  border-radius: 4px;
  margin-left: 0.5%;


  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    --margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  --overflow: hidden;
  flex-direction: row;  
  
  li {
    margin-right: 8px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  --margin-left: 1%;
  margin-top: 10px;
  margin-bottom: 16px;
  border-bottom: 2px solid;
`;
