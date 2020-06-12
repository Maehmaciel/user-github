import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const RepoSection = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const UserSection = styled.section`
  width: 300px;
  max-height: 50vh;
  padding: 10px;
  margin: 30px 0px 10px 0px;
  background-color: #fff;
`;

export const Item = styled.a`
  background-color: #fff;
  padding: 20px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
`;
