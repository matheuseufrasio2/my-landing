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
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 24px;

    @media (max-width: 768px) {
      width: 20%;
    }
  }
`;

export const ListOfPosts = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 75%;
  list-style: none;
  margin-top: 24px;

  > li {
    width: 100%;
    background: #333;
    padding: 20px 30px;
    border-radius: 5px;
    > h2 {
      color: #11c6ff;
    }

    > p {
      margin-top: 20px;

      > span {
        margin-left: 8px;
        background: #e5e5e5;
        color: #000;
        padding: 3px;
        border-radius: 5px;
      }
    }
  }
`;
