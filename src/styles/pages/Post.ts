import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }
`;

export const PostContainer = styled.div`
  max-width: 1120px;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

export const PostTop = styled.div`
  margin-top: 1.5rem;
  > h1 {
    font-size: 3rem;
  }
`;

export const PostInfo = styled.ul`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  list-style: none;

  > li {
    display: flex;
    align-items: center;
    p {
      margin-left: 0.25rem;
    }

    & + li {
      margin-left: 2rem;
    }

    @media (max-width: 768px) {
      & + li {
        margin-left: 1rem;
      }
    }
  }
`;

export const ArticlePost = styled.article`
  h2 {
    font-size: 2.25rem;
    color: #fff;
    margin: 3rem 0;
  }

  > div {
    p,
    span,
    a,
    ul {
      font-size: 1.125rem;
      line-height: 1.8;
      margin: 1.8rem 0;
    }

    a {
      color: #11c6ff;
      transition: all 0.2s;

      &:hover {
        text-decoration: underline;
        color: ${shade(0.2, '#11c6ff')};
      }
    }

    strong {
      font-weight: 700;
    }
  }
`;
