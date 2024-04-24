import React from "react";
import styled from "@emotion/styled";

interface ImageProps {
  src: string;
  radius?: number;
  alt?: string;
}

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img<{ radius?: number }>`
  width: auto;
  height: auto;
  border-radius: ${(props) => props.radius || 0}px;
  object-fit: contain;
`;

const Image: React.FC<ImageProps> = ({ src, radius, alt = "image" }) => {
  return (
    <StyledImageContainer>
      <StyledImage src={src} radius={radius} alt={alt} />
    </StyledImageContainer>
  );
};

export default Image;
