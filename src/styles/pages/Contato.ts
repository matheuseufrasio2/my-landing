import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
  $isFilled?: boolean;
}

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
      background: ${shade(0.2, "#e5e5e5")};
    }
  }

  > p {
    max-width: 1100px;

    @media screen and (max-width: 768px) {
      max-width: 95%;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1240px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > h1 {
    margin-top: 36px;
    font-size: 50px;
  }
  > h3 {
    margin-top: 36px;
    width: 80%;
    font-weight: 400;
    text-align: justify;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  > div {
    margin-top: 24px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    > ul {
      width: 40%;
      list-style: none;

      > li {
        display: flex;
        align-items: center;
        padding: 8px 0;

        > span {
          margin-right: 16px;
          min-width: 60px;
          height: 60px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 22px;
          color: #000;
        }

        > div {
          flex: 1;
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 20px;

          @media (max-width: 768px) {
            margin-right: 0;
          }

          > h3 {
            font-weight: 500;
            color: #00bcd4;
          }

          > p {
            margin-top: 8px;
          }
        }

        & + li {
          margin-top: 40px;
        }
      }

      @media (max-width: 768px) {
        width: 90%;
      }
    }
  }
`;

export const Form = styled.form<FormProps>`
  width: 40%;
  padding: 40px;
  background: #fff;
  border-radius: 5px;

  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 50px;
  }

  > h2 {
    font-size: 30px;
    color: #333;
    font-weight: 500;
  }

  .inputBox {
    position: relative;
    width: 100%;
    margin-top: 10px;

    > input {
      width: 100%;
      padding: 5px 0;
      font-size: 16px;
      margin: 10px 0;
      border: none;
      border-bottom: 2px solid #333;
      outline: none;
      resize: none;

      &:focus ~ span {
        color: #e91e63;
        font-size: 12px;
        transform: translateY(-20px);
      }
    }

    > span {
      ${props =>
    props.$isFilled
      ? css`
              color: #e91e63;
              font-size: 12px;
              transform: translateY(-20px);
            `
      : css`
              color: #666;
              font-size: 12px;
            `}
      position: absolute;
      left: 0;
      padding: 5px 0;
      font-size: 16px;
      margin: 10px 0;
      pointer-events: none;
      transition: 0.5s;
      /* color: #666; */
    }
  }

  > input {
    background-color: #e1e1e1;
    width: 70%;
    height: 56px;
    border: 2px solid #e1e1e1;
    border-radius: 5px;
    padding: 16px;

    & + input {
      margin-top: 16px;
    }
  }

  > textarea {
    background: #e1e1e1;
    margin-top: 24px;
    resize: none;
    width: 70%;
    height: 200px;
    border: 2px solid #e1e1e1;
    border-radius: 5px;
    font-size: 17px;
    padding: 16px;
  }

  > button {
    margin-top: 24px;
    width: 70%;
    height: 56px;
    border: 2px solid #d62828;
    background-color: #d62828;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    color: #fff;

    &:hover {
      background-color: ${shade(0.2, "#D62828")};
      border: 2px solid ${shade(0.2, "#D62828")};
    }
  }
`;

export const StyledLink = styled.a`
  border-radius: 5px;
  background: #25d366;
  color: #000;
  padding: 4px;
  margin-top: 8px;
  width: 220px;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
