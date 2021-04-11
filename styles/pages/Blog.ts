import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

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
    transition: 0.2s;

    @media (max-width: 768px) {
      width: 20%;
    }

    &:hover {
      background: ${shade(0.2, '#e5e5e5')};
    }
  }

  > p {
    max-width: 1100px;

    @media screen and (max-width: 768px) {
      max-width: 95%;
    }
  }
`;

export const PostList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  max-width: 700px;
  list-style: none;
  margin-top: 24px;

  > a {
    background: #1f2729;
    padding: 1rem;
    border-radius: 5px;
    transition: all 0.2s;

    display: flex;
    flex-direction: column;

    > h1 {
      font-size: 2rem;
    }

    > p {
      margin-top: 1.5rem;
    }

    &:hover {
      > h1 {
        color: #11c6ff;
      }
      background: ${shade(0.1, '#1f2729')};
    }
  }
`;

export const PostInfo = styled.ul`
  margin-top: 1.5rem;
  display: flex;

  > li {
    display: flex;

    > p {
      margin-left: 0.5rem;
    }

    & + li {
      margin-left: 1rem;
    }
  }
`;

export const ListOfPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  list-style: none;
  margin-top: 24px;

  @media (max-width: 800px) {
    width: 90%;
  }

  > li {
    min-height: 160px;
    width: 100%;
    background: #121214;
    padding: 20px 30px;
    border-radius: 5px;
    transition: 0.2s;

    @media (max-width: 800px) {
    }

    &:hover {
      margin-left: 8px;
      margin-right: -8px;
    }

    & + li {
      margin-top: 24px;
    }

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
