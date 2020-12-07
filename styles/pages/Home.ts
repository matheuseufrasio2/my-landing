import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  > a {
    background: #e5e5e5;
    color: #333;
    height: 40px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 24px;

    @media (max-width: 768px) {
      width: 40%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #11c6ff;
  text-align: center;
`;
