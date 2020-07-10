import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import breakpoints from '../utils/breakpoints';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <Wrapper>
    {/* <Header siteTitle={metaData.site.siteMetadata.title} /> */}
    <BackgroundParticles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            // direction: 'top',
            // out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            // onclick: {
            //   enable: true,
            //   mode: 'repulse',
            // },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
    <Container>{children}</Container>
    <footer />
  </Wrapper>
);

// IOSでハンバーガーメニューをfixedにするようの記述
const Wrapper = styled.div`
  /* overflow-y: scroll;
  height: 100vh; */
  height: 100%;
  width: 100%;
`;

const Container = styled.main`
  margin: 0 auto;
  color: #fafafa;
  box-sizing: border-box;
  @media ${breakpoints.mobile} {
    max-width: 540px;
  }

  @media ${breakpoints.tablet} {
    max-width: 720px;
  }

  @media ${breakpoints.laptop} {
    max-width: 960px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1140px;
  }
`;

const BackgroundParticles = styled(Particles)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;

export default Layout;
