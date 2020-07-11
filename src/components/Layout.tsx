import React from 'react';
import styled from 'styled-components';
import Particles, { MoveDirection, OutMode } from 'react-particles-js';
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
          color: {
            value: ['#F2ED68', '#D750F2', '#38F239', '#1C4DC9'],
          },
          opacity: {
            value: 0.3,
            anim: {
              enable: false,
            },
          },
          number: {
            value: 100,
            // density: {
            //   enable: true,
            // },
          },
          size: {
            value: 20,
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
            random: false,
            speed: 1,
            direction: MoveDirection.top,
            out_mode: OutMode.out,
          },
        },
        interactivity: {
          // events: {
          //   onhover: {
          //     enable: true,
          //     mode: 'bubble',
          //   },
          //   // onclick: {
          //   //   enable: true,
          //   //   mode: 'repulse',
          //   // },
          // },
          modes: {
            // bubble: {
            //   distance: 400,
            //   duration: 0.3,
            //   size: 4,
            //   opacity: 1,
            // },
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
