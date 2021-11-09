import { shade } from 'polished';
import styled, { css } from 'styled-components'

interface ContainerProps {
  $isActive: boolean
}

export const Container = styled.div<ContainerProps>`
  height: 80px;
  ${({ $isActive }) => $isActive && css`
      color: #11c6ff;
      background: ${shade(0.2, '#121214')};
      border-bottom: 2px solid #11c6ff;
  `}

  > a {
    color: #fff;

    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;
    height: 100%;
    transition: all 0.2s;

    ${({ $isActive }) => !$isActive && css`
      &:hover {
        color: #11c6ff;
        background: ${shade(0.2, '#121214')};
        border-bottom: 2px solid #11c6ff;
      }
    `}
  }
`;
