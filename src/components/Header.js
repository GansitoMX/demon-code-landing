import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import headerImage from '../assets/Designer-header.jpeg';

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #fdfdfd;
  color: #424242;
  text-align: left;
  padding: 0 5rem;
  font-family: 'San Francisco', Helvetica, sans-serif;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const HeaderImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 65%;
  padding-top: 150px;
  height: auto;
`;

const HeaderTitle = styled(motion.h1)`  // Use motion for animation
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const HeaderSubtitle = styled(motion.p)`  // Use motion for animation
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: Consolas, sans-serif;
`;

const HeaderButton = styled(motion.a)`  // Use motion for animation
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #ff9800;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #cf8211;
    color: white;
  }
`;



// Animation Variants
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const subtitleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.8 } }
};

// Component with animations
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          DemonCode
        </HeaderTitle>
        <HeaderSubtitle
          variants={subtitleVariants} 
          initial="hidden"
          animate="visible"
        >
          Somos <strong>Freelance</strong>, una agencia web digital, reflejamos el poder y la habilidad de "cortar" problemas con soluciones web elegantes.
        </HeaderSubtitle>
        <HeaderButton
          href="#contact"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          Comenzar
        </HeaderButton>
      </HeaderContent>

      <HeaderImage>
        <Image src={headerImage} alt="Imagen de ejemplo" />
      </HeaderImage>
    </HeaderContainer>
  );
};

export default Header;
