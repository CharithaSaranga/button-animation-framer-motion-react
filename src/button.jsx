import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #efdfff;
`;

const StyledCard = styled(motion.div)`
  background: #fff;
  padding: 3rem 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledHeader = styled(motion.h3)`
  color: #ab92ff;
`;

const StyledParagraph = styled(motion.p)`
  width: 600px;
  color: #6272a4;
`;

const Button = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <StyledContainer>
      <StyledCard
        whileHover={{ scale: 1.1 }}
        transition={{
          layout: {
            duration: 1,
            type: "spring",
          },
        }}
        layout
        onClick={() => setShowCard(!showCard)}
      >
        <StyledHeader className="">Development</StyledHeader>
        {showCard && (
          <StyledParagraph initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            In the bustling world of web development, skilled developers
            navigate through lines of code like digital maestros orchestrating a
            symphony of algorithms. Armed with keyboards and caffeine, these
            tech virtuosos sculpt the virtual landscape, turning lines of code
            into functional and aesthetically pleasing websites. In the
            ever-evolving realm of technology, web developers are the architects
            shaping the digital future with their creativity and coding prowess.
          </StyledParagraph>
        )}
      </StyledCard>
    </StyledContainer>
  );
};

export default Button;
