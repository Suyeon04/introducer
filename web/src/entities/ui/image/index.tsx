import React from 'react';
import styled from '@emotion/styled';

interface ImageProps {
    src: string;
    radius?: number;
    alt?: string;
}

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%; 
`;

const StyledImage = styled.img<{ radius?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: ${props => props.radius || 0}px; 
  object-fit: contain;
`;

const Image: React.FC<ImageProps> = ({ src, radius, alt = "image" }) => {
    return (
        <StyledImageContainer>
            <StyledImage
                src={src}
                radius={radius}
                alt={alt}
            />
        </StyledImageContainer>
    )
}

export default Image;
