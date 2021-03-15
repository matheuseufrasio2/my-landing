import styled, { css } from 'styled-components';

interface TextAreaProps {
  $isFilled: boolean;
  $isFocused: boolean;
}

export const Container = styled.div<TextAreaProps>`
  position: relative;
  width: 100%;
  margin-top: 10px;

  > textarea {
    height: 100px;
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
  }

  > span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;

    ${props =>
      props.$isFilled
        ? css`
            color: #e91e63;
            font-size: 12px;
            transform: translateY(-20px);
          `
        : css`
            font-size: 12px;
          `}
    ${props =>
      props.$isFocused
        ? css`
            color: #e91e63;
            font-size: 12px;
            transform: translateY(-20px);
          `
        : !props.$isFilled &&
          css`
            font-size: 16px;
          `}
  }
`;
