import { createGlobalStyle } from 'styled-components';
import { FONTS, COLORS } from '../theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

body {
  background: ${COLORS.BLACK_PRIMARY};
}

body, input, textarea, button {
  font: 500 1rem ${FONTS.ROBOTO}, sans-serif;
  color: ${COLORS.GRAY_PRIMARY};
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  font-family: ${FONTS.ROBOTO}, sans-serif;
  color: ${COLORS.GRAY_TERTIARY};
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}
`;
