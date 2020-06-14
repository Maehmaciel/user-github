import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const RepoSection = styled.section`
  width: 80vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    width: 90vw;
    margin: 20px;
  }
`;

export const UserSection = styled.section`
  width: 80vw;
  display: flex;
  flex-direction: row;
  @media (max-width: 650px) {
    flex-direction: column;
    width: 90vw;
    margin: 20px;
  }
`;

export const UserImage = styled.img`
  width: 250;
  height: 250;

  @media (max-width: 650px) {
    align-self: 'center';
    margin-top: 20px;
  }
`;

export const UserName = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  color: #dfdfdf;
`;

export const Item = styled.div`
  background-color: #f1f0f0;
  padding: 20px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 650px) {
    width: 250px;
    height: 400px;
  }
`;
export const InfoTitle = styled.h2`
  font-family: Gotham;
  font-style: normal;
  font-weight: 325;
  font-size: 16px;
  line-height: 13px;
  color: #a0a0a0;
  @media (max-width: 650px) {
    margin: 10px 5px;
  }
`;
export const InfoText = styled.span`
  font-family: Gotham;
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 13px;
  color: #dfdfdf;
  margin-left: 5px;
  @media (max-width: 750px) {
    margin: 10px 5px;
  }
`;

export const Back = styled(Link)`
  position: fixed;
  top: 20px;
  left: 30px;
  background-color: green;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    position: static;
    align-self: flex-start;
    margin-left: 30px;
  }
`;

export const Count = styled.span`
  margin-left: 10px;
`;
