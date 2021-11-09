import { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { HeaderProvider } from "../contexts/HeaderContext";
import Particles from "react-tsparticles";
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <HeaderProvider>
        <Component {...pageProps} />
        <Particles
          width="100"
          params={{
            "particles": {
              "number": {
                "value": 600,
                "density": {
                  "enable": true,
                  "value_area": 1500
                }
              },
              "line_linked": {
                "enable": true,
                "opacity": 0.02
              },
              "move": {
                "direction": "right",
                "speed": 1.05
              },
              "size": {
                "value": 1
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.05
                }
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
              },
              "modes": {
                "push": {
                  "particles_nb": 1
                }
              }
            },
            "retina_detect": true
          }}
        />
        <NextNProgress
          color="#11c6ff"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          options={{ showSpinner: false }}
        />
      </HeaderProvider>
    </>
  );
}
