import React from 'react';
// import Helmet from 'react-helmet';
// import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Internship from '../components/Internship';
// import Products from '../components/Products';
// import Contact from '../components/Contact';
import Layout from '../components/Layout';
import 'animate.css';

// if (typeof window !== 'undefined') {
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }

const IndexPage: React.FC = () => (
  // const [dimensions, setDimensions] = useState({
  //   height: 0,
  //   width: 0,
  // });

  // useEffect(() => {
  //   setDimensions({
  //     height: window.innerHeight,
  //     width: window.innerWidth,
  //   });
  //   const handleResize = () => {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   };
  //   window.addEventListener('resize', handleResize);
  // }, []);
  <Layout>
    {/* <Header size={dimensions.width} /> */}
    <Home />
    <About />
    <Skills />
    <Internship />
    {/* <Products />
      <Contact /> */}
  </Layout>
);
export default IndexPage;
