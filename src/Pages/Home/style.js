import styled from 'styled-components';

export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
  color: black;
  border-radius: 20px;
`;
export const Container = styled.div`
  max-width: 960px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Section = styled.section`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;
