import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #11c6ff;
  border-radius: 50%;
  border-top: 2px solid #1c4966;
  width: 24px;
  height: 24px;
  -webkit-animation: spin 0.1s linear infinite; /* Safari */
  animation: spin 0.4s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
