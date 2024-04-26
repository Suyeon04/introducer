import React from "react";
import styled from "@emotion/styled";

interface ImageProps {
  src: string;
  radius?: number;
  alt?: string;
  width?: number;
  height?: number;
}

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width + "px" || "auto"};
  height: ${(props) => props.height + "px" || "auto"};
  border-radius: ${(props) => props.radius || 0}px;
  object-fit: contain;
`;

const Image: React.FC<ImageProps> = ({
  src,
  radius,
  alt = "image",
  width,
  height,
}) => {
  return (
    <StyledImageContainer>
      <StyledImage
        src={src}
        radius={radius}
        alt={alt}
        width={width}
        height={height}
      />
    </StyledImageContainer>
  );
};

export default Image;
